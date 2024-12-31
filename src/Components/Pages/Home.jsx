import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../blog.json";

const Home = () => {
  const itemsPerPage = 83;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  // const [dice, setDice] = useState([]);
  return (
    <>
      {/* Home-Header */}
      <div className="pageheader-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pageheader-content text-center">
                <h2 className="text-center">
                  <b>
                    <span style={{ color: "orange" }}>B</span>logify
                  </b>
                </h2>
                <p>
                  Welcome to Blogify, where words come alive and ideas
                  flourish. Dive into a world of captivating stories, insightful
                  perspectives, and thought-provoking articles that traverse the
                  realms of DK's blog's main themes or topics. Our home is a
                  virtual sanctuary for curious minds, a place where the beauty
                  of language meets the depth of exploration.
                </p>
                {/* <nav className="bread-crumb">
                 
                </nav> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container my-5">
              <h2 className="text-center">
                <b>
                  Top Blogs of Design<span style={{ color: "orange" }}>DK</span>
                </b>
              </h2>
              <div className="row">
                {currentData.map((item) => (
                  <div className="col gridey" key={item.id}>
                    <div className="card my-2" style={{ width: "18rem" }}>
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="Image Not Avaliable"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.category}</h5>
                        <p className="card-text">{item.title}</p>
                        <a
                          href="/"
                          className="btn btn-primary"
                          style={{
                            background: "orange",
                            border: "1px solid orange",
                          }}
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;