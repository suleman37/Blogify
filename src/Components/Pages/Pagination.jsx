import React, { useState } from "react";
import data from "../../blog.json";
import "./styles.css";

const itemsPerPage = 10; 
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="container">
        <div className="row m-3">
          {currentData.slice(0, itemsPerPage).map((item) => (
            <div className="col gridey" key={item.id}>
              <div className="card my-2" style={{ width: "18rem" }}>
                <img src={item.image} className="card-img-top" alt="Image Not Avaliable" />
                <div className="card-body">
                  <h5 className="card-title">{item.category}</h5>
                  <p className="card-text">{item.title}</p>
                  <a
                    href="/"
                    className="btn btn-primary"
                    style={{ background: "orange", border: "1px solid orange" }}
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination buttons */}
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                <li className="item">
                  <a className="page-link mt-1 m-1" href="">
                    {currentPage}
                  </a>
                </li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={endIndex >= data.length}
                  href="/"
                >
                  Next
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
