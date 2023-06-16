import React, { useState } from "react";
import "./MobNav.css";
import { Col, Dropdown, Row } from "react-bootstrap";
import InputBox from "../../custom/Input/InputBox";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";

const MobNav = () => {
  const [search, setSearch] = useState("");
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    console.log(search);
  };

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
      <div className="mob-fake">ssdf</div>
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
                  <Dropdown.Item href={items.path} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"}}>
                    <i className="p-0 m-0 fs-5">{items.icon}</i>
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
