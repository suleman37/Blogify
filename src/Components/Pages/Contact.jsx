import React from "react";
import PagesHeader from "./PagesHeader";

const Contact = () => {
  return (
    <div>
      <PagesHeader title="Contact" curPage="contact" />
      <div className="container">
        <div className="row">
          <div className="col">
          <h2><b>Contact<span style={{ color: "orange" }}>Us</span>
              </b></h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form type="submit">
              <div class="form-group">
                <label for="exampleFormControlInput1"><b>Name</b></label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="form-group">
              <label for="exampleFormControlInput1"><b>Email</b></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  <b>Message</b>
                </label>
                <textarea
                placeholder="Enter Your Message"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button className="mt-3 mb-3" type="submit" style={{background:"orange" , color:"white" , borderRadius:"5px" , float:"right"}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;