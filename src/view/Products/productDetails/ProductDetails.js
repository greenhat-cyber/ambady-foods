import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Button, Col, Row } from "react-bootstrap";
import ProductCard from "../../../components/custom/productCards/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { productData } from "../../../util/data";
import { useCart } from "react-use-cart";

const ProductDetails = () => {
  const [active, setActive] = useState("");
  const [productDetails, setProductDetails] = useState(null);
  const { addItem, inCart, setCartMetadata, items } = useCart();

  const ProductId = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (ProductId?.id) {
      const filteredProduct = productData.filter((product) => product.id === parseInt(ProductId.id));
      if (filteredProduct.length > 0) {
        setProductDetails(filteredProduct[0])
      }
    }
  }, [ProductId?.id]);
  
  const alreadyAdded = inCart(ProductId?.id);

  const addToWishList = () => {
    setActive("animate");
  };
  const AddToCart = () => {
    addItem(productDetails)
    navigate("/cart");
  };

  return (
    <>
      <Row
        style={{ paddingBottom: "15rem" }}
        className="productDetails-container"
      >
        <Col md={5} className="img-box">
          <img
            className="img"
            src={productDetails?.image}
            alt="cake"
          />
          <div className="min-img-box">
            <img
              className="min-img"
              src={productDetails?.image}
              alt="cake"
            />
            <img
              className="min-img"
              src={productDetails?.image}
              alt="cake"
            />
            <img
              className="min-img"
              src={productDetails?.image}
              alt="cake"
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="mt-4">
            <h3>{productDetails?.title}</h3>
          </div>
          <div className="mt-3" style={{ color: "black" }}>
            <h6>Details</h6>
          </div>
          <div className="mt-3" style={{ color: "gray" }}>
            <p className="text p-0">
              {productDetails?.detailDescription}
            </p>
            <input type="checkbox" className="text-btn p-0 pb-2" />
          </div>
          <Row>
            <Col md={6} style={{ display: "flex", alignItems: "center" }}>
              <h2>₹ {productDetails?.price} / 1kg</h2>
              <div
                onClick={addToWishList}
                className={`HeartAnimation ${active}`}
              ></div>
            </Col>
            <Col md={6}></Col>
          </Row>
          <Row>
            <Col md={6}>
              <Button
                className="newbtn2 ps-4 pe-4 me-2"
                onClick={() => navigate(`/cart`)}
              >
                Buy Now
              </Button>
              <Button
                className="newbtn ps-4 pe-4 me-2"
                onClick={() =>AddToCart()}
              >
                {alreadyAdded ? "Add again" : "Add to Cart"}
              </Button>
            </Col>
          </Row>
        </Col>
        <hr className="mt-3" />
        <Row>
          <h5>Related Products</h5>
          <Col className="mt-3" md={4} xs={6}>
            <ProductCard />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default ProductDetails;
