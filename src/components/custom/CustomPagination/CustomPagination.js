import { Pagination } from "react-bootstrap";
import "./CustomPagnation.css"
const CustomPagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageLinks = [];

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    pageLinks.push(
      <Pagination.Item
        key={pageNumber}
        active={pageNumber === currentPage}
        onClick={() => onPageChange(pageNumber)}
      >
        {pageNumber}
      </Pagination.Item>
    );
  }

  return (
    <Pagination  >
      
      <Pagination.Prev
        onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
      />
      {pageLinks}
      <Pagination.Next
        onClick={() =>
          onPageChange(
            currentPage < totalPages ? currentPage + 1 : totalPages
          )
        }
      />
     
    </Pagination>
  );
};

export default CustomPagination;
