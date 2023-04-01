import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../login/Login.css";

// icons

import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Welcome from "../../../components/custom/welcome/Welcome";
import { NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div className="box row ">
      <Col sm={12} md={6} className="right-bg">
        <Welcome />
      </Col>
      <Col sm={12} md={6}>
        <div className="text-center login-icons  mt-5 mb-5">
          <h2>Create a new account</h2>
        </div>
        <div
          className="text-center login-icons text-warning mt-5 mb-4"
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AiFillGoogleCircle size={60} />
          <BsFacebook size={50} />
          <SiGmail size={50} />
        </div>
        <div style={{ width: "100%", display: "flex", placeContent: "center" }}>
          <Form style={{ width: "60%" }}>
            <Form.Label>
              Name <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              className="login-form mb-4 p-2 ps-3"
              placeholder="Enter your name"
            ></Form.Control>
            <Form.Label>
              Email <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              className="login-form mb-4 p-2 ps-3"
              placeholder="Enter email"
            ></Form.Control>
            <Form.Label>
              Password <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              className="login-form mb-4 p-2 ps-3 "
              placeholder="Enter password"
            ></Form.Control>
            <Form.Label>
              Confirm Password <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              className="login-form mb-4 p-2 ps-3 "
              placeholder="Enter Confirm password"
            ></Form.Control>
          </Form>
        </div>
        <div style={{ display: "flex", placeContent: "center" }}>
          <Button className="pe-5 ps-5 btn-warning">Sign Up</Button>
        </div>
        <div
          className="mt-3"
          style={{
            display: "flex",
            flexDirection: "row",
            placeContent: "center",
          }}
        >
          <p>I already have an account?</p>
          <NavLink
            to="/login"
            className="text-warning fw-bold ps-2"
            style={{ textDecoration: "none" }}
          >
            sign in
          </NavLink>
        </div>
      </Col>
    </div>
  );
};

export default Registration;
