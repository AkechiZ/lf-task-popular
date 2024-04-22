import './index.scss';

export function Icon(props) {
  const size = props.size || 16;

  return (
    <div
      className="icon"
      style={{
        width: size,
        height: size,
        color: props.color,
        fontSize: size,
      }}
    >
      <i className={`fa-solid fa-${props.name} ${props.className || ''}`} />
    </div>
  );
}
