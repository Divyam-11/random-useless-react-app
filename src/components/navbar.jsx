import React, { Component } from "react";
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://google.com"> 
              Navbar{" "}
              <span className="badge rounded-pill text-bg-secondary">{totalCounters}</span>
              </a>
  
           
          </div>
        </nav>
      );
}
 


export default NavBar;
