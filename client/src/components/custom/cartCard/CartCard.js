import React from "react";
import "./cartCard.css";
import { Button, Col, Row } from "react-bootstrap";
import { useState } from "react";

const CartCard = (props) => {
  const [active, setActive] = useState("");
  const addToWishList = () => {
    setActive("animate");
  };
  return (
    <>
      <div className="cartCard-body row shadow-sm  ">
        <Col
          md={6}
          className="pb-2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="shadow-sm card-img1"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={props.image}
            alt="product"
          />
        </Col>
        <Col md={6} className="text-dark">
          <div
            style={{
              display: "flex",
              height: "40px",
            }}
          >
            <h6 className="m-0">{props.name}</h6>
            <div
            onClick={addToWishList}
            className={`HeartAnimation ${active}`}
            ></div>
          </div>

          <div style={{ display: "flex" }}>
            <p className="m-0" style={{ fontSize: ".6rem", color: "gray" }}>
              {props.description}
            </p>
          </div>
          <div
            className="mt-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h6 className="m-0 me-3" style={{ fontSize: "1rem" }}>
              {props.price}
            </h6>

            <Button
              className="newbtn"
              style={{ backgroundColor: "#ffc107", color: "#111" }}
              // onClick={()=>navigate(`/product-details/${props.id}`)}
            >
              Buy Now
            </Button>
          </div>
        </Col>
      </div>
    </>
  );
};

export default CartCard;
