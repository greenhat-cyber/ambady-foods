import Navbar from "../components/Headers/navbar/Navbar";
import React from "react";
import "./sidebar.css";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import MobNav from "../components/Headers/mob-nav/MobNav";
import MobBottom from "../components/Headers/mob-nav/MobBottom";
const Default = () => {
  let auth = localStorage.getItem("token");

  const mainContent = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  return (
    <>
      <MobNav />
      <div className="mob">
        <MobBottom />
      </div>
      <div className="box">
        {/* <div className="sidebar" >
          <Navbar />
        </div> */}
        <div className="content p-3" ref={mainContent}>
          <Outlet />
          {/* {auth ? <Outlet /> : <Navigate to={"/login"} />} */}
        </div>
      </div>
    </>
  );
};

Default.displayName = "Default";
export default Default;
