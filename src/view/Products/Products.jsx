import React, { Profiler, useState } from "react";
import "./Products.css";
import InputBox from "../../components/custom/Input/InputBox";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../components/custom/productCards/ProductCard";
import { productData } from "../../util/data";
import CustomPagination from "../../components/custom/CustomPagination/CustomPagination";
const Products = () => {
  const [search, setSearch] = useState("");
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    console.log(search);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    // Calculate the index of the first and last item to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
    // Slice the productData array based on the index of the first and last items
    const currentProducts = productData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Row className="p-1 ps-4 pt-3">
        <Col>
          <h3>Product List</h3>
        </Col>
        <Col className="newInp2 pe-4 pb-2" style={{ display: "flex", justifyContent: "flex-end" }}>
          <InputBox
            value={search}
            type="text"
            placeholder="Enter your product"
            onChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>
      <Row className="p-1 mt-1 ps-4 ">
        {currentProducts.map((product, idx) => {
          return (
            <Col key={idx} md={4} xs={6}>
              <ProductCard
                name={product.title}
                image={product.image}
                description={product.previewDescription}
                price={product.price}
              />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <CustomPagination
            totalItems={productData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Products;
