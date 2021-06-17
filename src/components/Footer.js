import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center">
        <nav className="py-20 px-20">
          <ul className="flex flex-wrap justify-center items-center gap-5 sm:flex-row">
            <li>
              <NavLink to="/" exact className="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/information" className="active-link">
                Information
              </NavLink>
            </li>
            <li>
              <NavLink to="/purpose" className="active-link">
                Purpose
              </NavLink>
            </li>
            <li>
              <a
                href="https://black-history-month-api.herokuapp.com/people"
                className="active-link"
              >
                View API
              </a>
            </li>
            <li>
              <NavLink to="/documentation" className="active-link">
                Documentation
              </NavLink>
            </li>
            <li>
              <a
                href="https://github.com/zourdycodes/black-history"
                className="active-link"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
