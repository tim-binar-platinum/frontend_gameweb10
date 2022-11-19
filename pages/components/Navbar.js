import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <navbar>
        <div className="container pt-3">
          <div className="row">
            <div className="col col-md-12 col-lg-4 d-flex">
              <img
                id="menubar-icon"
                src="menubar.svg"
                alt=""
                className="img-fluid"
              />
              <h1>
                <Link href="#">LOG</Link>
              </h1>
            </div>
            <div id="menu" className="col-8 text-uppercase pt-2 pl-5 pr-5">
              <ul className="d-lg-flex d-md-block justify-content-between">
                <Link href="/about">about</Link>
                <Link href="/game-list">game list</Link>
                <Link href="/login">login</Link>
                <Link href="/register">register</Link>
              </ul>
            </div>
          </div>
        </div>
      </navbar>
    </div>
  );
};

export default Navbar;
