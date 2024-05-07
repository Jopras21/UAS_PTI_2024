import React from "react";
function Navbar(){
return (
<div className="navbar bg-trans">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
        <li><a >Home</a></li>
        <li>
          <a>Destination</a>
          <ul className="p-2">
            <li><a>Wisata</a></li>
            <li><a>Kuliner</a></li>
          </ul>
        </li>
        <li><a>Social Media</a></li>
        <li><a>About Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost hidden lg:flex text-5xl">Kelompok 3</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="text-2xl"><a className="mx-20">Home</a></li>
      <li className="text-2xl">
        <details>
          <summary>Destination</summary>
          <ul className="p-2 rounded-box w-44">
            <li className="text-xl"><a>Wisata</a></li>
            <li className="text-xl"><a>Kuliner</a></li>
          </ul>
        </details>
      </li>
      <li className="text-2xl"><a>Social Media</a></li>
    </ul>
  </div>
  <div className="navbar-end hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
  <li className="text-2xl"><a>About Us</a></li>
  </ul>
  </div>
</div>
);
}

export default Navbar