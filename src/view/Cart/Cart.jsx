import React from "react";
import { Badge, Col, Row, Table } from "react-bootstrap";
import CartCard from "../../components/custom/cartCard/CartCard";
import { productData } from "../../util/data";
import InputBox from "../../components/custom/Input/InputBox";

import "./Cart.css";

import { RxCross2 } from "react-icons/rx";
import { BiPlus, BiMinus } from "react-icons/bi";

const Cart = () => {
  const cartItem = [
    {
      image:
        "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/victoria_sponge.jpg",
      name: "Cake",
      price: "500",
      stock: true,
    },
    {
      image:
        "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/victoria_sponge.jpg",
      name: "Cake",
      price: "500",
      stock: false,
    },
    {
      image:
        "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/victoria_sponge.jpg",
      name: "Cake",
      price: "500",
      stock: true,
    },
    {
      image:
        "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/victoria_sponge.jpg",
      name: "Cake",
      price: "500",
      stock: false,
    },
    {
      image:
        "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/victoria_sponge.jpg",
      name: "Cake",
      price: "500",
      stock: true,
    },
  ];
  return (
    <>
      <div>
        <Row className="p-1 ps-4 pt-3">
          <Col>
            <h4>My Cart (0)</h4>
          </Col>
          <Col
            className="newInp2 pe-4 pb-2"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <InputBox
              // value={search}
              type="text"
              placeholder="Enter your product"
              // onChange={handleInputChange}
              // handleSubmit={handleSubmit}
            />
          </Col>
        </Row>
        <section className="cart-lg-screen">
          <Row className="p-1 ps-4 pt-3">
            <Col md={8} className="table-scroll">
              <Table responsive onScroll={true}>
                <thead>
                  <tr>
                    <th className="text-center">Products</th>
                    <th className="text-center">Availability</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                  </tr>
                </thead>
                <tbody className="hover-table">
                  <tr>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <RxCross2 style={{ cursor: "pointer" }} />
                        <img
                          style={{ width: "80px", borderRadius: "10px" }}
                          src="https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/victoria_sponge.jpg"
                          alt="not found"
                        />
                        <p className="p-0 m-0">
                          jksnkn jsh djdgsha jksdj ghshdi ghi
                        </p>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "1.3rem",
                        }}
                      >
                        {/* <p
                          className="p-0 m-0"
                          style={{ color: "#ff0000", fontSize: "15px" }}
                        >
                          Out of Stock
                        </p> */}
                        <p className="p-0 m-0" style={{ color: "#40ff00" }}>
                          In Stock
                        </p>

                        {/* <Badge bg="success">In Stock</Badge> */}
                        {/* <Badge bg="danger">Out of Stock</Badge> */}
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "1.3rem",
                        }}
                      >
                        ₹ 500
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "1rem",
                        }}
                      >
                        <div className="qty-btn">
                          <button>
                            <BiPlus />
                          </button>
                          <p className="p-0 m-0">0</p>
                          <button>
                            <BiMinus />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={4}>
              <div className="total-price-body">
                <p className="p-2 m-0 mt-3 pt-3">PRICE DETAILS</p>
                <hr />
                <Row className="p-3">
                  <Col>Price (9 items)</Col>
                  <Col className="text-end">₹ 5555</Col>
                </Row>
                <Row className="p-3">
                  <Col>Delivery Charges</Col>
                  <Col className="text-end text-success">Free</Col>
                </Row>
                <Row className="p-3">
                  <Col>Secured Packaging Fee</Col>
                  <Col className="text-end">₹ 55</Col>
                </Row>
                <hr />
                <Row className="p-3">
                  <Col>Total Amount</Col>
                  <Col className="text-end">₹ 5554845</Col>
                </Row>
                <hr />
                <Row className="p-3">
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button className="order-btn">Place Order</button>
                  </Col>
                </Row>
                <hr />
              </div>
            </Col>
          </Row>
        </section>
      </div>

      {/* mobile cart */}

      <section className="mob-cart">
        <div
          style={{
            width: "100%",
            height: "37vh",
            backgroundColor: "unset",
            overflowY: "scroll",
          }}
        >
          {cartItem.map((items, idx) => {
            return (
              <Row className="mt-1 mb-1" key={idx}>
                <Col>
                  <div className="cart-item-mob">
                    <Row className="m-0 p-0">
                      <Col style={{ 
                        display: "flex", 
                        alignItems: "center",
                        width:"50%"
                        }}>
                        <img
                          style={{ width: "100px", borderRadius: "10px" }}
                          src={items.image}
                          alt="not found"
                        />
                      </Col>
                      <Col
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "column",
                          justifyContent: "center",
                          width:"30%"
                        }}
                      >
                        <p className="m-0 p-0">{items.name}</p>
                        {items.stock ? (
                          <p className="p-0 m-0 me-4" style={{ color: "#40ff00" }}>
                            In Stock
                          </p>
                        ) : (
                          <p
                            className="p-0 m-0 "
                            style={{ color: "#ff0000", fontSize: "15px" }}
                          >
                            Out of Stock
                          </p>
                        )}

                        <p className="m-0 p-0">₹ {items.price}</p>
                      </Col>
                      <Col
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          flexDirection: "column",
                          width:"100%"
                        }}
                        >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            flexDirection: "column",
                            width:"100%"
                            // justifyContent:"flex-end"
                          }}
                        >
                          <RxCross2
                            style={{ cursor: "pointer", marginRight: ".3rem" }}
                          />
                        </div>
                        <div className="qty-btn-mob">
                          <button>
                            <BiPlus />
                          </button>
                          <p className="p-0 m-0">0</p>
                          <button>
                            <BiMinus />
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>

        {/* place order card */}

        <Row className="m-0 p-0 fixed-bottom" style={{zIndex:"1"}}>
          <Col className="m-2 p-0">
            <div className="place-order-card">
              <div
                className="p-2 m-0 mt-5 pt-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p className="p-0 m-0">PRICE DETAILS</p>
                <button className="order-btn-mob">Place Order</button>
              </div>
              <hr />
              <Row className="p-1">
                <Col>Price (9 items)</Col>
                <Col className="text-end">₹ 5555</Col>
              </Row>
              <Row className="p-1">
                <Col>Delivery Charges</Col>
                <Col className="text-end text-success">Free</Col>
              </Row>
              <hr />
              <Row className="p-1">
                <Col>Total Amount</Col>
                <Col className="text-end">₹ 5554845</Col>
              </Row>
              {/* <hr /> */}
              {/* <Row className="p-1">
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <button className="order-btn">Place Order</button>
                  </Col>
                </Row> */}
              <hr />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Cart;
