import MenuIcon from '@mui/icons-material/Menu';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <MenuIcon className="menu-icon" />
      <div className="text-container">
        <span className="geoMapper">GeoMapper</span>
        <span className="global">global ＞</span>
      </div>
      <SaveAltIcon className="save-icon" />
    </header>
  );
};

export default Header;
