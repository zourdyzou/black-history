import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="p-5 xl:px-10">
        <div>
          <h2 className="text-3xl">
            <span className="bg-white text-black px-3 rounded-full">B</span>
            lack History
          </h2>
        </div>

        {isOpen && (
          <nav className="mt-5">
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="bg-white text-black px-2 py-1"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/information"
                  activeClassName="bg-white text-black px-2 py-1"
                >
                  Information
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/purpose"
                  activeClassName="bg-white text-black px-2 py-1"
                >
                  Purpose
                </NavLink>
              </li>
              <li>
                <a href="https://black-history-month-api.herokuapp.com/people">
                  View API
                </a>
              </li>
              <li>
                <NavLink
                  to="/documentation"
                  activeClassName="bg-white text-black px-2 py-1"
                >
                  Documentation
                </NavLink>
              </li>
              <li>
                <a href="https://github.com/zourdycodes/black-history">
                  Github Repo
                </a>
              </li>
            </ul>
          </nav>
        )}

        <div className="absolute top-5 right-5 xl:right-10">
          <button className="text-4xl " onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
