import React, { useState } from "react";
import "./MobNav.css";
import { Col, Row } from "react-bootstrap";
import InputBox from "../../custom/Input/InputBox";

const MobNav = () => {
  const [search, setSearch] = useState("");
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    console.log(search);
  };
  return (
    <>
      <div className="mob-fake">ssdf</div>
      <div className="mob-nav">
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft:"1rem"
          }}
        >
          Ambady Foods
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight:"1rem"
          }}
        >
          <InputBox
            value={search}
            type="text"
            placeholder="Search products here"
            onChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Col>
      </div>
    </>
  );
};

export default MobNav;
