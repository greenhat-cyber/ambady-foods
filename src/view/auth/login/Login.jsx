import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Login.css";

// icons

import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Welcome from "../../../components/custom/welcome/Welcome";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   localStorage.setItem("token", true);
  // }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("token", true);

    navigate("/");
  };
  return (
    <div className="box row">

        <Col sm={12} md={6} className="right-bg">
          <Welcome />
        </Col>
        <Col sm={12} md={6}>
          <div className="text-center login-icons  mt-5 mb-5">
            <h2>Sign In</h2>
          </div>
          <div
            className="text-center login-icons text-warning mt-5 mb-5"
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
          <div
            style={{ width: "100%", display: "flex", placeContent: "center" }}
          >
            <Form style={{ width: "60%" }}>
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
                className="login-form mb-5 p-2 ps-3 "
                placeholder="Enter password"
              ></Form.Control>
            </Form>
          </div>
          <div style={{ display: "flex", placeContent: "center" }}>
            <Button
             
              onClick={(e) => handleLogin(e)}
              className="pe-5 ps-5 btn-warning"
            >
              Sign In
            </Button>
          </div>
          <div
            className="mt-5"
            style={{
              display: "flex",
              flexDirection: "row",
              placeContent: "center",
            }}
          >
            <p>don't have an account?</p>
            <NavLink
              to="/registration"
              className="text-warning fw-bold ps-2"
              style={{ textDecoration: "none" }}
            >
              sign up
            </NavLink>
          </div>
        </Col>
      
    </div>
  );
};

export default Login;
