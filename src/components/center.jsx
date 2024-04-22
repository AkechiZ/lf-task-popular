import './index.scss';

export function Center(props) {
  return (
    <div className="center" style={props.style}>
      {props.children}
    </div>
  );
}
