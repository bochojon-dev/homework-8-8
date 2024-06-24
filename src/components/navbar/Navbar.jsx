import React from "react";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <h2>Boss</h2>
          <ul>
            <li>
              <Link to={"/"}>Login</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/create-product"}>Create Product</Link>
            </li>
          </ul>
          <form action="">
            <input type="text" placeholder="Search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
