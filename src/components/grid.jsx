import './index.scss';

export function Grid(props) {
  return <div className="grid">{props.children}</div>;
}

export function Col(props) {
  return (
    <div className="col" style={{ width: props.width }}>
      {props.children}
    </div>
  );
}
