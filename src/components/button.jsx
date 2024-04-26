import './index.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LoadingOutlined } from '@ant-design/icons';
export function Button({ loading, children, ...restProps }) {
  return (
    <button type="button" className="button" {...restProps}>
      {loading && (
        <div style={{ marginRight: 8 }}>
          <LoadingOutlined />
        </div>
      )}
      {children}
    </button>
  );
}
