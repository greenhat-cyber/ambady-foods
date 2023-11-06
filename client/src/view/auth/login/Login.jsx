import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Login.css";

// icons

import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Welcome from "../../../components/custom/welcome/Welcome";
import { NavLink, useNavigate } from "react-router-dom";
import AuthInput from "../../../components/custom/Input/AuthInput";

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

  const data = [
    {
      title: "Email",
      placeholder: "Email",
      // value: email,

      // handleInputChange1: handleInputChange,
    },
    {
      title: "Password",
      placeholder: "Password",
      // value: password,
      // type:hide,
      backgroundColor: "red",
      // handleInputChange1: handleInputChange2,
    },
  ];

  return (
    <>
      <Row className="m-0 p-0">
        <Col sm={12} md={6} className="right-bg">
          <Welcome />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5rem",
            }}
          >
            <h1 className="fw-bold fs-4 m-0 p-0">Sign In</h1>
          </div>
          <div className="login">
            {data.map((item, idx) => {
              return (
                <AuthInput
                  key={idx}
                  value={item.value}
                  // onChange={item.handleInputChange1}
                  title={item.title}
                  type={item.type}
                />
              );
            })}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <button className="auth-btn">Sign In</button>
              <p>
                don't have an account?{" "}
                <span
                  onClick={() => navigate("/registration")}
                  style={{ color: "#f7971e", cursor: "pointer" }}
                >
                  sign up
                </span>{" "}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
