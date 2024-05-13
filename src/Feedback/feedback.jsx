import React from "react";
import Navbar from "../Navbar/navbar";
import "./feedback.css";


function FeedBack(){
  return(
    <>
    <div className="navbar">
      <Navbar />
    </div>
    <div class="containerFeedBack">
      <div class="row">
        <div class="col align-self-center">
          {/* <!-- contact form --> */}
          <form>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            {/* <!-- rating --> */}
            <div class="form-group">
              <label for="rating">Rating</label>
              <input
                type="number"
                name="rating"
                class="form-control"
                id="rating"
                placeholder="Enter Rating from 1 to 10"
              />
            </div>

            <div class="form-group">
              <label for="feedback">Feedback</label>
              <textarea
                class="form-control"
                id="feedback"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default FeedBack;
