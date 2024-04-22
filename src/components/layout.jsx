import './index.scss';

export function Layout(props) {
  return <div className="layout">{props.children}</div>;
}

export function Header(props) {
  return <div className="header">{props.children}</div>;
}

export function Content(props) {
  return <div className="content">{props.children}</div>;
}
