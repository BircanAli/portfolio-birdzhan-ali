import { Link } from "react-router-dom";
import logo from "../assets/images/logo-small.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="page logo" />
    </Link>
  );
};
export default Logo;
