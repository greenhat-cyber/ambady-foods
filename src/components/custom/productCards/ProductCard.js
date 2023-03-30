import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./ProductCard.css";
import TwitterHeart from "twitter-heart";
const ProductCard = () => {
  const [isLiked, setClick] = useState(false);
  return (
    <div className="card-body1 row">
      <Col
        md={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className="shadow-sm "
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src="https://images.pexels.com/photos/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="product"
        />
      </Col>
      <Col md={6} className="text-dark">
        <div
        className="pt-3"
          style={{
            display: "flex",
            height:"fit-content",
            justifyContent: "space-between",
          }}
        >
          <h3>Cake</h3>

          <TwitterHeart isLiked={isLiked} onClick={() => setClick(!isLiked)} />
        </div>
        
      </Col>
    </div>
  );
};

export default ProductCard;
