import React, { useState } from "react";
import "./NavBar.css";
import { Col, Dropdown, Row } from "react-bootstrap";
import InputBox from "../../custom/Input/InputBox";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const { totalUniqueItems } = useCart();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    console.log(search);
  };

  const loc = useLocation()

  const navData = [
    {
      title: "Home",
      // icon: <AiFillHome />,
      path: "/",
    },
    {
      title: "Products",
      // icon: <BsBoxFill />,
      path: "/products",
    },
    {
      title: "Wishlist",
      // icon: <AiFillHeart />,
      path: "/wishlist",
    },
    {
      title: `Cart(${totalUniqueItems})`,
      // icon: <HiShoppingCart />,
      path: "/cart",
    },
  ];

  const proData = [
    {
      title: "Settings",
      icon: <BsFillGearFill />,
      path: "/settings",
    },
    {
      title: "Log Out",
      icon: <BiLogOutCircle />,
      path: "",
    },
  ];
  return (
    <>
      <div className="mob-fake"></div>
      <div className="mob-nav shadow-sm">
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "1rem",
            color:"#fff"
          }}
        >
          Ambady Foods
        </Col>
        <Col
         className="navLists"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            gap: "4rem"
          }}
        >
          {
            navData.map((items, idx) => {
              return (

                <NavLink
                  key={idx}
                  to={items.path}
                  style={{ textDecoration: "none", color: "#fff", transition: "ease-in 0.5s" }}
                >
                  <ul
                    // className="m-0 p-0 hoverLi"
                  className={`${loc.pathname === items.path ? "activeDot" : ""} p-0 m-3`}

                  >
                    <li
                      className="p-2 m-0"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                      }}
                    >
                      <p className="p=0 m-0 mt-1 ">{items.title}</p>
                      {/* <div className={`${loc.pathname === items.path ? "activeDot" : ""} p-0 m-0`} ></div> */}
                    </li>
                  </ul>
                </NavLink>
              )
            })
          }
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "1rem",
          }}
        >
          <Dropdown>
            <Dropdown.Toggle className="btn-primaryNew" id="dropdown-basic">
              <img
                className="userProfile"
                alt="neha"
                src="https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menuNew">
              {proData.map((items, idx) => {
                return (
                  <Dropdown.Item href={items.path} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "1rem" }}>
                    <i className="p-0 m-0">{items.icon}</i>
                    <p className="p=0 m-0 mt-1 ">{items.title}</p>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>

          {/* <InputBox
            value={search}
            type="text"
            placeholder="Search products here"
            onChange={handleInputChange}
            handleSubmit={handleSubmit}
          /> */}
        </Col>
      </div>
    </>
  );
};

export default NavBar;
