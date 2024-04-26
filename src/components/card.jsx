import { formatNumber } from '@/utils';
import './index.scss';
import { DetailItem, DetailList } from './details';
import LazyLoad from 'react-lazyload';
// eslint-disable-next-line import/no-extraneous-dependencies,import/order
import {
  ShareAltOutlined,
  StarOutlined,
  UserOutlined,
  WarningOutlined,
} from '@ant-design/icons';

export function Card(props) {
  return (
    <CardContainer>
      <Rank value={props.rank} />
      <Avatar src={props.avatar} />
      <ProjectName href={props.url}>{props.name}</ProjectName>
      <DetailList>
        <DetailItem
          icon={<UserOutlined style={{ color: 'orange' }} />}
          emphasis
        >
          {props.username}
        </DetailItem>
        <DetailItem icon={<StarOutlined style={{ color: 'blue' }} />}>
          {formatNumber(props.stars)} stars
        </DetailItem>
        <DetailItem icon={<ShareAltOutlined style={{ color: '#1f74e7' }} />}>
          {formatNumber(props.forks)} forks
        </DetailItem>
        <DetailItem icon={<WarningOutlined style={{ color: '#f14c4c' }} />}>
          {formatNumber(props.issues)} open issues
        </DetailItem>
      </DetailList>
    </CardContainer>
  );
}

function CardContainer(props) {
  return <div className="card-container">{props.children}</div>;
}

function Rank(props) {
  return <div className="rank">#{props.value}</div>;
}

function Avatar(props) {
  return (
    <LazyLoad>
      <img className="avatar" src={props.src} alt="头像" />
    </LazyLoad>
  );
}

function ProjectName(props) {
  return (
    <div className="project-name">
      <a href={props.href}>{props.children}</a>
    </div>
  );
}
