import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";
import User from "./User";

function App() {
  document.title = "Employee Searcher";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={User} />
          <Route exact path="/React_Employee_App" component={User} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
