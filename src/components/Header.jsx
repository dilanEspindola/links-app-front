import { Link } from "react-router-dom";

import "../styles/header.css";

export const Header = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="nav__link nav__link--logo">
            links app
          </Link>
          <Link to="/login" className="nav__link nav__link--login">
            login
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
};
