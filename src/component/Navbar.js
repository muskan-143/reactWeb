import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.Main}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.title}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switch"
              onClick={props.toggleMode}
            />

            {/* IF else statement for enabling the dark or the light mode  */}
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "dark" ? "Enable Light mode" : "Enable dark mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// We are specifying the type as when we reuse it we don't write number in place of string and vise-versa.
Navbar.propTypes = {
  // isRequired :- make it compulsory to add the tittle it can't be undefined.
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  Main: PropTypes.string,
};

// It is the default property provide if the props will not be passed.
Navbar.defaultProps = {
  Main: "Main Name please",
  title: "Title here Please",
  about: "About here Please",
};
