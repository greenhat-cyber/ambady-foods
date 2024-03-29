import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {

  const navigate = useNavigate()

  const [active, setActive] = useState("");


  const addToWishList = () => {
    setActive("animate");
  };

  const BuyNow = (id) => {
    navigate(`/product-details/${id}`)
  };

  return (
    <div className="card-body1 row shadow-sm  ">
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
        <div className="mt-3" style={{ display: "flex", alignItems: "center" }}>
          <h6 className="m-0 me-3" style={{ fontSize: "1rem" }}>
          ₹ {props.price}
          </h6>

          <Button
            className="newbtn"
            onClick={()=>BuyNow(props.id)}
            // onClick={()=>navigate(`/product-details/${props.id}`)}
          >
            Buy Now
          </Button>
        </div>
      </Col>
    </div>
  );
};

export default ProductCard;
