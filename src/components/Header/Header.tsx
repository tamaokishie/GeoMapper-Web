import MenuIcon from '@mui/icons-material/Menu';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import './Header.css';
import PushPinIcon from '@mui/icons-material/PushPin';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Header = () => {
  return (
    <header className="header">
      <ArrowBackIosIcon className="back-icon" style={{ fontSize: '26px' }}/>
      <div className="text-container">
        <span className="geoMapper">Global Status</span>
        {/* <span className="global" style={{ marginRight: '5px' }}>global</span>
        <NextIcon className="next-icon" style={{ fontSize: '14px' }}/> */}
      </div>
      <PushPinIcon className="pin-icon" style={{ fontSize: '26px' }}/>
    </header>
  );
};

export default Header;
