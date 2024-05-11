
import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="navbar bg-trans" id="nav">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li>
              <NavLink to="/Destination" activeClassName="active">Destination</NavLink>
              <ul className="p-2">
                <li><NavLink to="/Destination/Wisata" activeClassName="active">Wisata</NavLink></li>
                <li><NavLink to="/Destination/Kuliner" activeClassName="active">Kuliner</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/About" activeClassName="active">Social Media</NavLink></li>
            <li><NavLink to="/AboutUs" activeClassName="active">About Us</NavLink></li> {/* Changed to /AboutUs to match Route path */}
          </ul>
        </div>
        <NavLink className="wow btn-ghost hidden lg:flex round mx-4 rounded-full" to="/">
          <img src={logo} alt = "logo" className="w-36 h-36 object-cover" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
