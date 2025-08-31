const Card = ({ title, info, description }) => (
  <div className="card">
    <h3>{title}</h3>
    {info && Object.keys(info).length > 0 && (
      <ul className="info-list">
        {Object.entries(info).map(([label, value], index) => (
          <li key={index}>
            <strong>{label}:</strong>{' '}
            {value ? (
              value.startsWith('http') ? (
                <a href={value} target="_blank" rel="noopener noreferrer">Link</a>
              ) : (
                value
              )
            ) : (
              <em>N/A</em>
            )}
          </li>
        ))}
      </ul>
    )}
    <p>{description}</p>
    

  </div>
);

export default Card;