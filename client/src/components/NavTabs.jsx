import { color } from 'framer-motion';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import './style/NavTabs.css';

export default function NavTabs() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const profile = Auth.getProfile();
  const username = profile ? profile.data.username : '';  // Handle null case

  return (
    // <nav className="navbar navbar-expand-lg bg-secondary" style={styles.navContainer}>
    <nav className="navbar navbar-expand-lg bg-secondary" >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0 navContainer">
            <div className="rightHand navLink">
                <div className="navLink">
                  <Link className="titleLink" to="/">Home</Link>
                </div>
                <div className="navLink">
                  <Link className="titleLink" to="/about">About Us</Link>
                </div>
                <div className="navLink">
                  <Link className="titleLink" to="/services">Services</Link>
                </div>
                 <div className="navLink">
                  <Link className="titleLink" to="/dashboard">Dashboard</Link>
                </div>
                <div className="navLink">
                  <Link className="titleLink" to="/contact">Contact</Link>
                </div>
            </div>
            <div className="leftHand navLink">
                <div className="navLink">
                  {Auth.loggedIn() ? (
                    <>
                    <span>Hey there, {username}!</span>
                    <button className="titleLink navLink" onClick={Auth.logout}>
                      Logout
                    </button>
                    </>
                 ) : (
                     <>
                   <Link className="titleLink navLink" to="/login">
                     Login
                   </Link>
                    <Link className="titleLink navLink" to="/signup">
                    Signup
                   </Link>
                    </>
                  )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
