import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Employee Searcher
          </Link>
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    </div>

  );
}

export default Navbar;
