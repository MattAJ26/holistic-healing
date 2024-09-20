import { color } from 'framer-motion';
import { Link } from 'react-router-dom';
import './style/';

// const styles = {
//   navContainer: {
//     // display: flex,
//     margin: 0,
//     background: '#2d3e50',
//     // color: white,
//   },

// };

export default function NavTabs({ links }) {
  return (
    // <nav className="navbar navbar-expand-lg bg-secondary" style={styles.navContainer}>
    <nav className="navbar navbar-expand-lg bg-secondary navContainer" >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/about">About Us</Link></div>
            <div><Link to="/services">Services</Link></div>
            <div><Link to="/contact">Contact</Link></div>
            <div><Link to="/signup">Sign Up</Link></div>
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/logout">Logout</Link></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
