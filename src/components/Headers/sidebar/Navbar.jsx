import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BsBoxFill, BsFillGearFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import { useCart } from "react-use-cart";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [loc, setLoc] = useState("");
  const { totalUniqueItems } = useCart();

  useEffect(() => {
    const path = window.location.pathname;
    setLoc(path);
    settoggle(false);
  }, [toggle]);

  const navigate = useNavigate();

  const auth = true;

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
      title: `Cart(${totalUniqueItems})`,
      icon: <HiShoppingCart />,
      path: "/cart",
    },
    {
      title: "Settings",
      icon: <BsFillGearFill />,
      path: "/settings",
    },
  ];

  const proData = [
    {
      title: "Settings",
      icon: <BsFillGearFill />,
      path: "/settings",
    },
    {
      title: `${auth ? "Log In" : "Log Out"} `,
      icon: auth ? <BiLogInCircle /> : <BiLogOutCircle />,
      path: `${auth ? "/login" : ""} `,
    },
    // {
    //   title: "Log Out",
    //   icon: <BiLogOutCircle />,
    //   path: "/login",
    // },
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
      <hr style={{ position: "relative", top: "17rem" }} />
      <div
        className="profil_bottom"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle className="btn-primaryNew" id="dropdown-basic">
            <img
              className="userProfile"
              alt="userName"
              src="https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menuNew">
            {proData.map((items, idx) => {
              return (
                <Dropdown.Item
                  onClick={() => navigate(`${items.path}`)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <i className="p-0 m-0 ">{items.icon}</i>
                  <p className="p=0 m-0 mt-1 ">{items.title}</p>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>

        <p className="m-0 p-0">Hi,Vishal</p>
      </div>
    </div>
  );
};

export default Navbar;
