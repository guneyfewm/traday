"use client";
import Link from "next/link";
import React from "react";
import withAuth from "./withAuth";
import Cart from "./Cart";
import Cookies from "js-cookie";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          Traday
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            
            <Link href="/user/profile" className="nav-item nav-link">
              Profile
            </Link>
            <Link href="/user/messages" className="nav-item nav-link">
              Messages 
            </Link>
            
          </div>
          <div className="navbar-nav ms-auto">
            <Link href="/user/signup" className="nav-item nav-link">
              Login
            </Link>

            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
