import React from "react";
import "./Nav.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">
            <h4>Bookery</h4>
          </a>
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#bestsellers">
                Bestsellers
              </a>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#audiobooks"
                  >Audiobooks</a
                >
              </li> */}
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#booktok">
                #Booktok
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#staff-picks">
                Staff Picks
              </a>
            </li>
          </ul>
        </div>
        <ul id="nav-icons-ul">
          <li class="nav-icons nav-link">
            <a href="#">
              <i class="fa-solid fa-bookmark"></i>
            </a>
          </li>
          <li class="nav-icons nav-link">
            <a href="#">
              <i class="fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
