import './index.scss';

export function DetailList(props) {
  return <dl className="detail-list">{props.children}</dl>;
}

export function DetailItem(props) {
  return (
    <div className="detail-item-wrapper">
      <dt>{props.icon}</dt>
      <dd
        className="detail-data"
        style={{
          fontWeight: props.emphasis ? 'bold' : 'normal',
        }}
      >
        {props.children}
      </dd>
    </div>
  );
}
