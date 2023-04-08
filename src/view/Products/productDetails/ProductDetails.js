import React, { useState } from "react";
import "./ProductDetails.css";
import { Button, Col, Row } from "react-bootstrap";

const ProductDetails = () => {
  const [active, setActive] = useState("");

  const addToWishList = () => {
    setActive("animate");
  };

  return (
    <>
      <Row style={{paddingBottom:"15rem"}} className="productDetails-container" >
        <Col md={5} className="img-box">
          <img
            className="img"
            src="https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg"
            alt="cake"
          />
          <div className="min-img-box">
            <img
              className="min-img"
              src="https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg"
              alt="cake"
            />
            <img
              className="min-img"
              src="https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg"
              alt="cake"
            />
            <img
              className="min-img"
              src="https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg"
              alt="cake"
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="mt-4">
            <h3>Cake</h3>
          </div>
          <div className="mt-3" style={{ color: "black" }}>
            <h6>Details</h6>
          </div>
          <div className="mt-3" style={{ color: "gray" }}>
            <p className="text p-0" >
              Carrot cake closely resembles a quick bread in method of
              preparation (all the wet ingredients, such as the eggs and sugar,
              are mixed, all the dry ingredients are mixed, and the wet are then
              added to the dry) and final consistency (which is usually denser
              than a traditional cake and has a coarser crumb). Many carrot cake
              recipes include optional ingredients, such as kirsch, cinnamon,
              nuts, pineapple or raisins. The most common icing on carrot cake
              is icing sugar and lemon juice or icing sugar and kirsch (Europe)
              and an icing with icing sugar, butter and cream cheese (United
              States). As the cake is relatively moist, it can be conserved
              longer than many other types of cakes.
            </p>
            <input type="checkbox" className="text-btn p-0 pb-2" />
          </div>
          <Row>
            <Col md={6} style={{display:"flex",alignItems:"center",}} >
              <h2>₹ 500 / 1kg</h2>
              <div
                onClick={addToWishList}
                className={`HeartAnimation ${active}`}
              ></div>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Button
                className="newbtn2 ps-4 pe-4 me-2"
                // onClick={() => navigate(`/product-details/${props.id}`)}
              >
                Buy Now
              </Button>
              <Button
                className="newbtn ps-4 pe-4 me-2"
                style={{ backgroundColor: "#ffc107", color: "#111" }}
                // onClick={() => navigate(`/product-details/${props.id}`)}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
