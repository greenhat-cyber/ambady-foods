import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BsBoxFill, BsFillGearFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [toggle1, settoggle1] = useState("2");
  const [loc, setLoc] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setLoc(path);
    settoggle(false);
  }, [toggle]);

  const sidebarData = [
    {
      title: "Home",
      icon: <AiFillHome />,
      path: "/",
    },
    {
      title: "Products",
      icon: <BsBoxFill />,
      path: "/products",
    },
    {
      title: "Wishlist",
      icon: <AiFillHeart />,
      path: "/wishlist",
    },
    {
      title: `Cart(${toggle1})`,
      icon: <HiShoppingCart />,
      path: "/cart",
    },
    {
      title: "Settings",
      icon: <BsFillGearFill />,
      path: "/settings",
    },
  ];

  return (
    <div className="sidebar shadow-sm">
      <div className="logo">
        <h2 className="m-0 p-0">Ambady Foods</h2>
      </div>
      <div>
        {sidebarData.map((items, idx) => {
          return (
            <NavLink
              key={idx}
              onClick={() => settoggle(true)}
              to={items.path}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ul
                className={`${loc === items.path ? "active" : ""} p-0 m-3 `}
                style={
                  loc === items.path
                    ? {
                        boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.142)",
                        // boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.142)",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "8px",
                        flexDirection: "row",
                      }
                    : {
                        boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.142)",
                        // boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.142)",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "8px",
                        flexDirection: "row",
                      }
                }
              >
                <li
                  className="p-2 m-0"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="p-0 ps-5 m-0 fs-5">{items.icon}</i>
                  <p className="p=0 m-0 ps-2 mt-1 ">{items.title}</p>
                </li>
              </ul>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
