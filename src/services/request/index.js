import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => Promise.reject(err), // 返回一个 rejected 状态的 Promise
    );
  }

  request(config) {
    return this.instance
      .request(config)
      .then((response) => {
        if (response.status === 403) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response;
      })
      .catch((error) => {
        if (error.response) {
          // 请求已发出并收到响应，但状态码不在 2xx 范围内
          const message = `请求失败，请在，${Math.ceil(
            (error.response.headers.get('x-ratelimit-reset') * 1000 -
              Date.now()) /
              1000,
          )}秒后重试`;
          error.message = message;
          throw new Error(error);
        }
        if (error.request) {
          // 请求已发出，但未收到响应
          throw new Error('No response received from server');
        } else {
          // 请求尚未发出，出现了错误
          throw new Error(`Request error: ${error.message}`);
        }
      });
  }

  get(config) {
    return this.request({ ...config, method: 'get' });
  }

  post(config) {
    return this.request({ ...config, method: 'post' });
  }
}

export default new Request(BASE_URL, TIMEOUT);
