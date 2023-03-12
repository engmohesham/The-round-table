import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> الصفحه الرئيسيه </Link>
          <Link to="/menu"> القائمه </Link>
          <Link to="/about"> من نحن </Link>
          <Link to="/contact"> تواصل معنا</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> الصفحه الرئيسيه </Link>
        <Link to="/menu"> قائمه الطعام </Link>
        <Link to="/about"> من نحن </Link>
        <Link to="/contact"> تواصل معنا </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
