import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Time from "./time.jsx";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const navElement = document.getElementById("nav");
    if (navElement) {
      navElement.classList.remove("visible");

      // Ensure the animation re-runs by delaying the addition of 'visible'
      setTimeout(() => {
        navElement.classList.add("visible");
      }, 1);
    }
  }, [location]);

  return (
    <>
      <div className="navbar bg-trans" id="nav">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-15 w-10"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] bg-neutral rounded-box shadow mx-10 py-5 w-52 box-shadow: 0px 0px 27px 23px #f7fafc"
            >
              <li>
                <NavLink exact to="/" activeClassName="active" className="">
                  Home
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/History" activeClassName="active">
                  History
                </NavLink>
              </li>
              <li>
                <NavLink to="/Destination" activeClassName="active">
                  Destination
                </NavLink>
                <ul className="p-2 z-50">
                  <li>
                    <NavLink to="/Destination/Wisata" activeClassName="active">
                      Wisata
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Destination/Kuliner" activeClassName="active">
                      Kuliner
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/About" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li></li>
            </ul>
          </div>
          <NavLink
            className="btn-ghost hidden lg:flex text-5xl rounded-full"
            to="/"
          >
            <img
              src={logo}
              alt="logo"
              className="w-32 h-32 mx-4 object-cover"
            />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl">
              <NavLink to="/" activeClassName="active" className="mx-4 px-4">
                Home
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink
                to="/History"
                activeClassName="active"
                className="mx-4 px-4"
              >
                History
              </NavLink>
            </li>
            <li className="text-xl">
              <details>
                <summary>Destination</summary>
                <ul className="p-2 w-44">
                  <li className="text-xl">
                    <NavLink
                      to="/Destination/Wisata"
                      activeClassName="active"
                      className="mx-4"
                    >
                      Wisata
                    </NavLink>
                  </li>
                  <li className="text-xl">
                    <NavLink
                      to="/Destination/Kuliner"
                      activeClassName="active"
                      className="mx-4 px-4"
                    >
                      Kuliner
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-xl">
              <NavLink
                to="/About"
                activeClassName="active"
                className="mx-4 px-4"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden flex justify-center lg:flex w-96 m-8">
          <Time />
        </div>
      </div>
    </>
  );
};

export default Navbar;
