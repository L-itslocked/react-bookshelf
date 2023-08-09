import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/doyonlaura">
          <i class="fa-brands fa-linkedin coder-social"></i>
        </a>
        <a href="https://github.com/L-itslocked">
          <i class="fa-brands fa-github coder-social"></i>
        </a>
        <a href="https://codepen.io/Itslocked" target="_blank">
          <i class="fa-brands fa-codepen coder-social"></i>
        </a>
      </div>
      <a href="https://github.com/L-itslocked/react-bookshelf">
        Open-source code
      </a>{" "}
      by Laura Doyon
    </footer>
  );
}
