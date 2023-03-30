import Navbar from "../components/Headers/navbar/Navbar";
import React from "react";
import "./sidebar.css";
import { Outlet } from "react-router-dom";
// import MobNav from "../components/Headers/mob-nav/MobNav";
const Default = () => {
  return (
    <div class="box">
      <div class="sidebar">
        <Navbar />
      </div>
      <div class="content">
        <Outlet />
      </div>
    </div>
  );
};

Default.displayName = "Default";
export default Default;
