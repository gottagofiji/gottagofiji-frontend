// Header.jsx - Top navigation for GOTTAGOFIJI
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="GOTTAGOFIJI Logo" className="h-10 w-auto" />
        </Link>
        <div className="text-sm text-gray-600">
          <span className="mr-4">List Your Car</span>
          <span>Offer Transfers</span>
        </div>
      </div>
    </header>
  );
};

export default Header;