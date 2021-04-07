import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <Link to="/">
      <img className={`logo ${props.logo}__logo`} src={logo} alt="логотип" />
    </Link>
  );
}

export default Logo;
