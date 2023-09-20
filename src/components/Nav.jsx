import React from "react";
import "./nav.css";

function Nav() {
  return (
    <div>
      <nav class="navbar">
        <ul class="navbar-left">
          <li class="navbar-item">Edie</li>
        </ul>

        <ul class="navbar-right">
          <li class="navbar-item">
            <a href="#">Home</a>
          </li>
          <li class="navbar-item">
            <a href="#">Services</a>
          </li>
          <li class="navbar-item">
            <a href="#">Our Works</a>
          </li>
          <li class="navbar-item">
            <a href="#">Clients</a>
          </li>
          <li class="navbar-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
