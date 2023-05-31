"use client";
import React from "react";
import withAuth from "./withAuth";
import Cookies from "js-cookie";

const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        Cookies.remove("token");
        window.location.replace("/")
      }}
    >
      Logout
    </button>
  );
};

export default withAuth(LogoutButton);
