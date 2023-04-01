import Navbar from "../components/Headers/navbar/Navbar";
import React from "react";
import "./sidebar.css";
import { Navigate, Outlet } from "react-router-dom";
const Default = () => {
  let auth = localStorage.getItem("token");
  return (
    <div className="box">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="content">
        {auth ? <Outlet /> : <Navigate to={"/login"} />}
      </div>
    </div>
  );
};

Default.displayName = "Default";
export default Default;
