import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import './navbar.css'

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
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
            className="menu menu-sm dropdown-content mt-3 z-[1] bg-neutral rounded-box shadow mx-10 py-5 w-52"
          >
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="text-2xl">
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
            <li>
            <NavLink to="/Feedback" activeClassName="active">
                Feedback
              </NavLink>
            </li>
            <li>
            <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
            className="border rounded p-1 mr-2"
          />
          <button onClick={handleSearch} className="border rounded p-1 bg-neutral text-white">Search</button>
          </li>
          </ul>
        </div>
        <NavLink className="btn-ghost hidden lg:flex text-5xl" to="/">
          <img src={logo} alt="logo" className="w-36 h-36 mx-8 object-cover" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-2xl">
            <NavLink to="/" activeClassName="active" className="mx-2">
              Home
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/History" activeClassName="active">
              History
            </NavLink>
          </li>
          <li className="text-2xl">
            <details>
              <summary>Destination</summary>
              <ul className="p-2  w-44">
                <li className="text-xl">
                  <NavLink to="/Destination/Wisata" activeClassName="active">
                    Wisata
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink to="/Destination/Kuliner" activeClassName="active">
                    Kuliner
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li className="text-2xl">
            <NavLink to="/About" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/Feedback" activeClassName="active">
              Feedback
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden mx-10 lg:flex">
        <div className="flex items-center">
        <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
            className="border rounded p-1 mr-2"
          />
          <button onClick={handleSearch} className="border rounded p-1 bg-neutral text-white">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
