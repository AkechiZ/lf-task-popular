import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Col, message as antdMessage, Row } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  BattleLink,
  Card,
  Content,
  Empty,
  Filter,
  Header,
  Layout,
  Loader,
  Loading,
} from '@/components';
import {
  cssRankAction,
  getGithubRankAction,
  javaRankAction,
  jsRankAction,
  pythonRankAction,
  rubyRankAction,
} from '@/store/modules/home';
import {
  getCssRank,
  getGithubRank,
  getJavaRank,
  getJsRank,
  getPythonRank,
  getRubyRank,
} from '@/services/modules/home';

function Index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [projects, setProjects] = useState({ items: [], totalCount: 0 });
  const [errorOccurred, setErrorOccurred] = useState(false);
  const pageNumberRef = useRef(1);
  const [messageApi, contextHolder] = antdMessage.useMessage();

  const language = searchParams.get('language');
  const navigate = useNavigate();
  const {
    githubRank,
    javascriptRank,
    rubyRank,
    javaRank,
    cssRank,
    pythonRank,
  } = useSelector(
    (state) => ({
      githubRank: state.rank.githubRank,
      javascriptRank: state.rank.javascriptRank,
      rubyRank: state.rank.rubyRank,
      javaRank: state.rank.javaRank,
      cssRank: state.rank.cssRank,
      pythonRank: state.rank.pythonRank,
    }),
    shallowEqual,
  );

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch();

  const fetchData = (loadMore) => {
    if (language === null) {
      // 全部
      if (!githubRank.items || loadMore) {
        getGithubRank(pageNumberRef.current, 30)
          .then((res) => {
            dispatch(getGithubRankAction(res));
          })
          .catch((error) => {
            messageApi.error(error.message);
          });
      }
    } else if (language === 'javascript') {
      if (!javascriptRank.items || loadMore) {
        getJsRank(pageNumberRef.current, 30)
          .then((res) => {
            dispatch(jsRankAction(res));
          })
          .catch((error) => {
            messageApi.error(error.message);
          });
      }
    } else if (language === 'ruby') {
      if (!rubyRank.items || loadMore) {
        getRubyRank(pageNumberRef.current, 30)
          .then((res) => {
            dispatch(rubyRankAction(res));
          })
          .catch((error) => {
            messageApi.error(error.message);
          });
      }
    } else if (language === 'java') {
      if (!javaRank.items || loadMore) {
        getJavaRank(pageNumberRef.current, 30)
          .then((res) => {
            dispatch(javaRankAction(res));
          })
          .catch((error) => {
            messageApi.error(error.message);
          });
      }
    } else if (language === 'css') {
      if (!cssRank.items || loadMore) {
        getCssRank(pageNumberRef.current, 30)
          .then((res) => {
            dispatch(cssRankAction(res));
          })
          .catch((error) => {
            messageApi.error(error.message);
          });
      }
    } else if (language === 'python') {
      if (!pythonRank.items || loadMore) {
        getPythonRank(pageNumberRef.current, 30)
          .then((res) => {
            dispatch(pythonRankAction(res));
          })
          .catch((error) => {
            messageApi.error(error.message);
          });
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    setProjects({ items: [], totalCount: 0 });
    pageNumberRef.current = 1;
    fetchData(false);
  }, [language]);

  useEffect(() => {
    let dataSource;
    if (language === null) {
      dataSource = githubRank;
    } else {
      // eslint-disable-next-line no-eval
      dataSource = eval(`${language}Rank`);
    }

    // setErrorOccurred(false);
    if (dataSource.items && dataSource.items.length > 0) {
      setProjects(() => ({
        items: dataSource.items,
        totalCount: dataSource.total_count,
      }));
    }
    setLoading(false);
  }, [
    language,
    githubRank,
    javascriptRank,
    rubyRank,
    javaRank,
    cssRank,
    pythonRank,
  ]);

  const onLoadMore = () => {
    if (loadingMore) {
      return;
    }
    setLoadingMore(true);
    pageNumberRef.current += 1;
    fetchData(true);
    setLoadingMore(false);
  };

  return (
    <Layout>
      {contextHolder}
      <Header>
        <Filter
          value={language}
          onChange={(value) => {
            const newSearchParams = new URLSearchParams(searchParams);

            if (value) {
              newSearchParams.set('language', value);
            } else {
              newSearchParams.delete('language');
            }

            setSearchParams(newSearchParams);
          }}
        />
        <BattleLink
          onClick={() => {
            navigate('/battle');
          }}
        />
      </Header>
      <Content>
        {loading && <Loading />}
        {errorOccurred && (
          <Empty
            message={
              typeof errorOccurred === 'string'
                ? errorOccurred
                : '发生未知错误，请刷新页面重试'
            }
          />
        )}
        {!loading && !errorOccurred && (
          <InfiniteScroll
            dataLength={projects.items.length}
            hasMore
            loader={<Loader key={0} />}
            next={onLoadMore}
          >
            <Row gutter={[16, 16]} justify="space-around">
              {projects.items.map((project, i) => (
                <Col key={i} lg={6} md={8} sm={12} xs={12}>
                  <Card
                    rank={i + 1}
                    url={project.html_url}
                    avatar={project.owner.avatar_url}
                    name={project.name}
                    username={project.owner.login}
                    stars={project.stargazers_count}
                    forks={project.forks}
                    issues={project.open_issues}
                  />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        )}
      </Content>
    </Layout>
  );
}

export default Index;
