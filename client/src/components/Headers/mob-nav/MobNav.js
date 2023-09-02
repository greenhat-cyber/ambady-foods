import React, { useState } from "react";
import "./MobNav.css";
import { Col, Dropdown, Row } from "react-bootstrap";
import InputBox from "../../custom/Input/InputBox";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";

const MobNav = () => {
  const [search, setSearch] = useState("");
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
      title: `Cart(0)`,
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
      <div className="mob-nav">
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "1rem",
          }}
        >
          Ambady Foods
        </Col>
        <Col
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
                  style={{ textDecoration: "none", color: "black",transition:"ease-in 0.5s" }}
                >
                  <ul
                    className={`${loc.pathname === items.path ? "activeLi" : ""} p-0 m-3 `}

                  >
                    <li
                      className="p-2 m-0"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p className="p=0 m-0 mt-1 ">{items.title}</p>
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

export default MobNav;
