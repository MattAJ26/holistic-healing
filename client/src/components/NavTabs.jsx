import { color } from 'framer-motion';
import { Link } from 'react-router-dom';
import './style/navtabs.css';

export default function NavTabs({ links }) {
  return (
    // <nav className="navbar navbar-expand-lg bg-secondary" style={styles.navContainer}>
    <nav className="navbar navbar-expand-lg bg-secondary" >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0 navContainer">
            <div className="rightHand navLink">
                <div className="navLink">
                  <Link to="/">Home</Link>
                </div>
                <div className="navLink">
                  <Link to="/about">About Us</Link>
                </div>
                <div className="navLink">
                  <Link to="/services">Services</Link>
                </div>
                <div className="navLink">
                  <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="leftHand navLink">
                <div className="navLink">
                  <Link to="/signup">Sign Up</Link>
                </div>
                <div className="navLink">
                  <Link to="/login">Login</Link>
                </div>
                <div className="navLink">
                  <Link to="/logout">Logout</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
