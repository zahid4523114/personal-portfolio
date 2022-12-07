import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar shadow-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
            >
              <li>
                <Link
                  className="text-white 
                "
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white 
                "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="text-white 
              "
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white 
                "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link
                to="/home"
                className="text-white 
              "
              >
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link
                className="text-white 
              "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="text-white 
              "
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white 
              "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
