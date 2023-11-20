import React from "react";
import "./InputBox.css";
import { Form } from "react-bootstrap";

const AuthInput = (props) => {
  return (
    <div>
      <Form.Label>
        {props.title} <span style={{ color: "red" }}>*</span>
      </Form.Label>
      <Form.Control
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e)}
        style={{
          height: `${props.height}`,
          width: `${props.width}`,
          backgroundColor: `${props.backgroundColor}`,
        }}
        className="login-form auth-inp ps-3"
      ></Form.Control>
      {/* <p >{props.title}</p>
      <input
        style={{ height: `${props.height}` ,width: `${props.width}` , backgroundColor:`${props.backgroundColor}`}}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e)}
        className="auth-inp ps-3"
      /> */}
    </div>
  );
};

export default AuthInput;
