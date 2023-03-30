import React, { Fragment } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./Home.css";

import { BsSearch } from "react-icons/bs";
import MainCarousel from "../../components/custom/carousel/MainCarousel";
import CategoryCarousel from "../../components/custom/carousel/CategoryCarousel";
import ProductCard from "../../components/custom/productCards/ProductCard";

const Home = () => {
  const data = [
    {
      logo: "https://cdn4.iconfinder.com/data/icons/fast-food-130/64/14-Cake-256.png",
      name: "Cake",
    },
    {
      logo: "https://cdn0.iconfinder.com/data/icons/bakery-and-dessert-color/64/Chocolate_dessert_food_icon_sweet_doodle-256.png",
      name: "Chocolate",
    },
    {
      logo: "https://cdn1.iconfinder.com/data/icons/fast-food-181/512/Cake-256.png",
      name: "Ice Cream",
    },
    {
      logo: "https://cdn1.iconfinder.com/data/icons/cake-flat-1/64/cake-08-256.png",
      name: "Cream Cake",
    },
    {
      logo: "https://cdn3.iconfinder.com/data/icons/food-1272/64/burger-64.png",
      name: "Burger",
    },
    {
      logo: "https://cdn4.iconfinder.com/data/icons/fast-food-130/64/27-Donut-64.png",
      name: "Doughnut",
    },
    {
      logo: "https://cdn0.iconfinder.com/data/icons/food-and-drinks-1-8/36/9-64.png",
      name: "Chocolate Cake",
    },
    {
      logo: "https://cdn4.iconfinder.com/data/icons/food-and-drinks-2-8/36/166-64.png",
      name: "Cake",
    },
  ];

  return (
    <Fragment>
      <Row className="p-3 pb-2">
        <Col>
          <h4>Home</h4>
        </Col>
        <Col>
          <Form style={{ display: "flex", justifyContent: "right" }}>
            <Form.Control
              className="p-2 ps-3 inp-style w-50"
              placeholder="search by food name"
            ></Form.Control>
            <BsSearch style={{ position: "absolute", top: "3.2rem" }} />
          </Form>
        </Col>
      </Row>
      <Row className="p-3">
        <Col md={12}>
          <MainCarousel />
        </Col>
      </Row>
      <Row className="p-3">
        <h4 className="pb-2"> Category </h4>
        {data.map((items, idx) => {
          return (
            <Col className="pt-2">
              <CategoryCarousel products={items.logo} title={items.name} />
            </Col>
          );
        })}
      </Row>
      <Row className="p-3" >
        <Col>
          <ProductCard />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Home;
