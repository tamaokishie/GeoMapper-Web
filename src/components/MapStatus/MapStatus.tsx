import './MapStatus.css';

const MapStatus = () => {
  return (
    <div className="status-section">
      <div className="status-item">
        <div className="status-color red"></div>
        <span>Lived there</span>
        <span className="status-level">Level : 4</span>
      </div>
      <div className="status-item">
        <div className="status-color yellow"></div>
        <span>Stayed there</span>
        <span className="status-level">Level : 3</span>
      </div>
      <div className="status-item">
        <div className="status-color green"></div>
        <span>Visited there</span>
        <span className="status-level">Level : 2</span>
      </div>
      <div className="status-item">
        <div className="status-color purple"></div>
        <span>Alighted there</span>
        <span className="status-level">Level : 1</span>
      </div>
      <div className="status-item">
        <div className="status-color white"></div>
        <span>Never been there</span>
        <span className="status-level">Level : 0</span>
      </div>
    </div>
  );
};

export default MapStatus;
