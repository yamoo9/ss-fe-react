import './Avatar.css';

function Avatar({ source, name, size = 48, online = false }) {
  const statusMessage = online ? '온라인' : '오프라인';

  return (
    <figure
      className="Avatar"
      title={statusMessage}
      style={{
        '--color': online ? 'var(--online-color)' : 'var(--offline-color)',
      }}
    >
      <img src={source} alt={name} width={size} height={size} />
      <figcaption aria-label={statusMessage} />
    </figure>
  );
}

export default Avatar;
