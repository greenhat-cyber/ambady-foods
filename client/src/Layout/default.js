import React from "react";
import "./sidebar.css";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import MobBottom from "../components/Headers/nav/MobBottom";
import NavBar from "../components/Headers/nav/NavBar";
import Footer from "../components/Footer/Footer";
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
      <NavBar />
      <div className="mob">
        <MobBottom />
      </div>
      <div className="box">
        {/* <div className="sidebar" >
          <Navbar />
        </div> */}
        <div className="content" ref={mainContent}>
          <Outlet />
          {/* {auth ? <Outlet /> : <Navigate to={"/login"} />} */}
          <Footer/>
        </div>
      </div>
    </>
  );
};

Default.displayName = "Default";
export default Default;
