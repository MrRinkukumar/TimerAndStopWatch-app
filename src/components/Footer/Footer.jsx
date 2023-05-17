import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
      <p className="rights">
        All Rights Reserved &copy; 2023 Your Company Name
      </p>
    </footer>
  );
}

export default Footer;
