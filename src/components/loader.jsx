import './index.scss';
import { LoadingOutlined } from '@ant-design/icons';

export function Loader(props) {
  return (
    <div className="loader">
      <LoadingOutlined />
      <div className="loader-message">{props.message || '加载中...'}</div>
    </div>
  );
}
