import React from "react";
import { Col, Row } from "react-bootstrap";
import CartCard from "../../components/custom/cartCard/CartCard";
import { productData } from "../../util/data";

const Cart = () => {
  return (
    <div>
      <Row className="p-1 ps-4 pt-3">
        <Col>
          <h4>My Cart (0)</h4>
        </Col>
        <Col
          className="newInp2 pe-4 pb-2"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {/* <InputBox
            value={search}
            type="text"
            placeholder="Enter your product"
            onChange={handleInputChange}
            handleSubmit={handleSubmit}
          /> */}
        </Col>
      </Row>  
      <Row className="p-1 ps-4 pt-3">
        {productData.map((product,idx) => {
          return (
            <Col key={idx} md={4} xs={6}>
              <CartCard
                name={product.title}
                image={product.image}
                description={product.previewDescription}
                price={product.price}
                id={product.id}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Cart;
