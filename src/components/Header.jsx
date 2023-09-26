import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between pt-14">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <ul className="flex gap-12 text-lg text-brand-dark">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/donation">Donation</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
