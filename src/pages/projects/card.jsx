

const Card = ({ data }) => {
  const { title, status, description, stack, live, dev, login } = data;

  return (
  <div className="Project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <h6>{status}</h6>

    <div className="progress-bar">
      <div className="progress-fill" ></div>
    </div>

    <div className="tech-stack">
      {Array.isArray(stack) && stack.length > 0 && (
        stack.map((tech, index) => (
          <div key={index}>{tech}</div>
        ))
      )}
    </div>
    <div>
      

      {live && Object.keys(live).length > 0 && (
        <>
        <div className="server-title">
          
          <i className="fas fa-globe"></i> Production Environment
        </div>
        <div id="live-section">
            {Object.entries(live).map(([label, url], index) => (
              <div key={index} className="server-offline">
                <i class="fas fa-circle"></i>
                <strong>{label}:</strong>{' '}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </div>
            ))}
        </div>
        </>
      )}


      
      {dev && Object.keys(dev).length > 0 && (
        <>
        <div className="server-title">
          <i className="fas fa-code"></i> Development Environment
        </div>
        <div id="dev-section">
            {Object.entries(dev).map(([label, url], index) => (
              <div key={index} className="server-offline">
                <i class="fas fa-circle"></i>
                <strong>{label}:</strong>{' '}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </div>
            ))}
        </div>
        </>
      )}
    </div>

    
    
    

  </div>
  );
};

export default Card;