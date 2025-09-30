import React from "react";
import logo from "../assets/logo.png";
import back_icon from '../assets/return.png';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <img src={logo} alt="Logo" className="topbar-logo" />
      </div>
      <div className="topbar-right">
        <button className="topbar-btn" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <img src={back_icon} alt="back-icon" className="topbar-icon" />
            Back
        </button>

        <button className="topbar-btn">New workflow</button>
        <button className="topbar-btn">Save changes</button>
        <button className="topbar-btn">Export</button>
      </div>
    </div>
  );
}
