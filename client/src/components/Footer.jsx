import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="mainContainerfooter">

      <div className="container text-center mb-3">
        <h4>&copy; {new Date().getFullYear()} - Eir of Renewal</h4>
        <div>
          <a href="/about" className="mx-2">About Us</a>
          <a href="/contact" className="mx-2">Contact</a>
          <a href="/terms" className="mx-2">Terms of Service</a>
          <a href="/privacy" className="mx-2">Privacy Policy</a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="footer-text">
          <p>Email: sjenergydoula@gmail.com</p>
          <p>Phone: +1 801-669-2282</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;