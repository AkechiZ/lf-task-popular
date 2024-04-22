import Request from '..';

// eslint-disable-next-line import/prefer-default-export
export function getGithubRank(page, perPage) {
  let res;
  // eslint-disable-next-line no-useless-catch
  try {
    res = Request.get({
      url: `https://api.github.com/search/repositories?q=stars%3A%3E1+language%3Anull&sort=stars&order=desc&type=Repositories&page=${page}&per_page=${perPage}`,
    });
    return res;
  } catch (error) {
    throw error; // 将错误向上传递
  }
}

function getTypeRank(type, page, perPage) {
  let res;
  try {
    res = Request.get({
      url: `https://api.github.com/search/repositories?q=stars%3A%3E1+language%3A${type}&sort=stars&order=desc&type=Repositories&page=${page}&per_page=${perPage}`,
    });
  } catch (error) {
    res = error;
  }

  return res;
}

export function getUser(username) {
  let res;
  try {
    res = Request.get({
      url: `https://api.github.com/users/${username}`,
    });
  } catch (error) {
    res = error;
  }
  return res;
}

export function getJsRank(page, perPage) {
  return getTypeRank('javascript', page, perPage);
}

export function getRubyRank(page, perPage) {
  return getTypeRank('ruby', page, perPage);
}

export function getJavaRank(page, perPage) {
  return getTypeRank('java', page, perPage);
}

export function getCssRank(page, perPage) {
  return getTypeRank('css', page, perPage);
}

export function getPythonRank(page, perPage) {
  return getTypeRank('python', page, perPage);
}
