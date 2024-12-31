import React, { useState , useEffect } from "react";
import PagesHeader from "./PagesHeader";
import data from "../../blog.json";
import "./styles.css"

const About = () => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  return (
    <div>
      <PagesHeader title={<b>
                About <span style={{ color: "orange" }}>Us</span>
              </b>} curPage="About" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-9">
          <h4>
              <b>
                About <span style={{ color: "orange" }}>Us</span>
              </b>
            </h4>
            <p>Welcome to the expansive universe of Blogify, a virtual haven where the symphony of words resonates, and ideas dance across the digital canvas. Established with a profound commitment to intellectual curiosity and a passion for the art of expression, our blog represents a collaborative endeavor of diverse voices and perspectives.</p>
            <p>
            At Blogify, we believe in the transformative power of storytelling, where each article is a thread in the intricate fabric of our narrative. Our team, a mosaic of writers, thinkers, and creatives, is dedicated to curating content that not only entertains but also enlightens. From in-depth analyses of contemporary issues to soul-stirring narratives that transcend time, our virtual sanctuary aims to be a source of inspiration and intellectual exploration.</p>
            <p>As advocates for the written word, we recognize that every sentence holds the potential to spark dialogue, challenge perceptions, and forge connections. Our commitment extends beyond mere content creation; it encompasses the cultivation of a vibrant community where ideas are shared, perspectives are respected, and conversations flourish. Through the exchange of thoughts and the celebration of diverse voices, Blogify emerges as more than a blog—it becomes a dynamic ecosystem of knowledge and creativity.</p>
            <p>Navigating the various domains of Blogify, you'll encounter a kaleidoscope of topics ranging from DK's blog's main themes or categories to additional areas of interest. Whether you're a seasoned intellectual or a casual reader, our content is tailored to captivate, engage, and leave an indelible imprint on your thoughts.</p>
            <p>Thank you for embarking on this literary journey with Blogify. As we continue to evolve and expand our horizons, we invite you to immerse yourself in the ever-growing tapestry of ideas and narratives that define our digital landscape. Together, let's revel in the boundless possibilities of language and exploration, making Blogify not just a destination but a dynamic community of minds.</p>
            <p>At DK, we are passionate about your niche or topic. Founded in 2004, our mission is to briefly describe the purpose or goal of your blog. Whether you're a target audience, a related interest group, or simply someone looking for specific information, we strive to be your go-to resource.</p>
            <br/>
          </div>
          <div className="col-12 col-sm-3">
          {currentData.map((Element) => {
                  console.log(Element);
                  return (
                    <div className="about">
                      <div className="abslouty m-2" style={{border :"1px solid gray" , padding:"9px" , borderRadius:" 10px"}}>
                      {Element.title}<br/>
                      <a href={Element.url} style={{color:"orange"}}>Read more &rarr;</a>
                      </div>
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;