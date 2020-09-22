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
            Home
          </Link>
          <h1 className="display-4">React Employee Searcher</h1>
          <p className="lead">Click the collumns to sort, click the camera icon so see the employees picture, and type any search string in the search box.</p>
        </div>
      </div>
    </div>

  );
}

export default Navbar;
