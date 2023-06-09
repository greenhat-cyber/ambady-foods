import React, { Fragment, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Home.css";

import MainCarousel from "../../components/custom/carousel/MainCarousel";
import CategoryCarousel from "../../components/custom/carousel/CategoryCarousel";
import ProductCard from "../../components/custom/productCards/ProductCard";
import InputBox from "../../components/custom/Input/InputBox";
import { categoryData, productData } from "../../util/data";
import CustomPagination from "../../components/custom/CustomPagination/CustomPagination";
import CustomDrawer from "../../components/custom/Drawer/CustomDrawer";

const Home = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    console.log(search);
  };

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the productData array based on the index of the first and last items
  const currentProducts = productData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Fragment>
      <Row className="p-1 pb-2 pt-3 ">
        <Col>
          <h4 className="p-0 m-0 ps-2">Home</h4>
        </Col>
        <Col
          className="newInp"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <InputBox
            value={search}
            type="text"
            placeholder="Search products here"
            onChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>
      <Row className="p-1">
        <Col md={12}>
          <MainCarousel />
        </Col>
      </Row>
      <Row className="p-1">
        <h4 className="pb-2 m-0 p-0 ps-3 mt-3"> Category </h4>
      </Row>

      <CategoryCarousel products={categoryData} />

      <Row className="p-1 mt-4 ps-4 ">
        {currentProducts.map((product, idx) => {
          return (
            <Col key={idx} md={4} xs={6}>
              <ProductCard
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
      <Row className="pagination-bottom">
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomPagination
            totalItems={productData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Home;
