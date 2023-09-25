import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between pt-14">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <ul className="flex gap-12">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Donation</Link>
          </li>
          <li>
            <Link to="/">Statistics</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
