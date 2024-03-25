import React from "react";
import PagesHeader from "./PagesHeader";
import Pagination from "./Pagination";
import "./styles.css"

const Blog = () => {
  const card = [(opener = "new option")];
  return (
    <div>
      <PagesHeader title="Blogs" curPage="blog" />
      <div>
      <Pagination/>
      </div>
    </div>
  );
};

export default Blog;