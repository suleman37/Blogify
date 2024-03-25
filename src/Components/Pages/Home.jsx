import React, { useEffect, useState } from "react";
// import Data from "../../blog.json";
import { Link } from "react-router-dom";
// import Data from "../../blog.json"

const Home = () => {
  const [dice, setDice] = useState([]);
  const FetchApi = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2024-02-29&to=2024-02-29&sortBy=popularity&apiKey=441edc7e840d473eb549be2755f91653"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let parsed = data.articles;
        console.log(parsed);
        setDice(parsed);
      });
  };
  useEffect(() => {
    FetchApi();
  }, []);
  return (
    <>
      {/* Home-Header */}
      <div className="pageheader-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pageheader-content text-center">
              <h2 className="text-center"><b>
                Design<span style={{ color: "orange" }}>DK</span>
              </b></h2>
                <p>
                  Welcome to Design DK, where words come alive and ideas
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
              <h2 className="text-center"><b>Top Blogs of  
                Design<span style={{ color: "orange" }}>DK</span>
              </b></h2>
              <div className="row">
                {dice.map((Element) => {
                  console.log(Element);
                  return (
                    <div className="container mt-5" key={Element.url}>
                      <div className="row">
                        <div className="col">
                        <div className="card text-center">
                        <div className="card-header">{Element.author}</div>
                        <div className="card-body d-flex justify-content-between">
                          <div className="flex">
                          <img src={Element.urlToImage} alt="Image not Avaliable" width={"500px"}/>
                          </div>
                          <div className="align-self-center"  style={{flexDirection:"column"}}>
                          <h5 className="card-title">{Element.title}</h5>
                          <p className="card-text">
                           {Element.description}
                          </p>
                          <a href={Element.url} className="btn btn-primary">
                            Read More
                          </a>
                          </div>
                        </div>
                        <div className="card-footer text-muted">{Element.publishedAt}</div>
                      </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;