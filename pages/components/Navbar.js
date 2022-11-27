/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
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
                <Link href="/">Last of Game</Link>
              </h1>
            </div>
            <div id="menu" className="col-8 text-uppercase pt-2 pl-5 pr-5">
              <ul className="d-lg-flex d-md-block justify-content-between">
                <Link href="/about">about</Link>
                {" "}
&nbsp;
                <Link href="/game-list">game list</Link>
                {" "}
&nbsp;
                <Link href="/login">login</Link>
                {" "}
&nbsp;
                <Link href="/register">register</Link>
                {" "}
&nbsp;
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
