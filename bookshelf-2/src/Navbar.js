import React from "react";
import "./Nav.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            <h4>Bookery</h4>
          </a>
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#bestsellers">
                Bestsellers
              </a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#audiobooks"
                  >Audiobooks</a
                >
              </li> */}
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#booktok">
                #Booktok
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#staff-picks">
                Staff Picks
              </a>
            </li>
          </ul>
        </div>
        <ul id="nav-icons-ul">
          <li className="nav-icons nav-link">
            <a href="#">
              <i className="fa-solid fa-bookmark"></i>
            </a>
          </li>
          <li className="nav-icons nav-link">
            <a href="#">
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
