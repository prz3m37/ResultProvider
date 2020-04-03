import React from "react";
import { withRouter } from "react-router-dom";
// import CountDownTimer from "./CountDownTimer";

const Navbar = (props: any) => {
  return (
    <div className="sidebar">
      <div className="sidebar">
        <a href="/">Numerical Results</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
