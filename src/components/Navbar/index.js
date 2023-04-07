import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoB from "../../assets/images/b-white-removebg-preview.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faHome,
  faFolderClosed,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" style={{ textDecoration: "none" }}>
        <img src={LogoB} alt="logo" />
        <p>Birdzhan Ali</p>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#757575" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about">
          <FontAwesomeIcon icon={faAddressCard} color="#757575" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contacts">
          <FontAwesomeIcon icon={faEnvelope} color="#757575" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/projects">
          <FontAwesomeIcon icon={faFolderClosed} color="#757575" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/BircanAli"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/birdzhan-ali-781315240/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/bircan.ali.9/"
          >
            <FontAwesomeIcon icon={faFacebook} color="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
