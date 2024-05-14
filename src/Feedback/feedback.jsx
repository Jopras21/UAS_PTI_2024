import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import "./feedback.css";

function FeedBack() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://sheetdb.io/api/v1/j9oet9nklgy7n", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: data["data[name]"],
            rating: data["data[rating]"],
            feedback: data["data[feedback]"],
          },
        }),
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="containerFeedBack">
        <div className="row">
          <div className="col align-self-center">
            <form id="sheetdb-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="data[name]"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input
                  type="number"
                  name="data[rating]"
                  className="form-control"
                  id="rating"
                  placeholder="Enter Rating from 1 to 10"
                  min={1}
                  max={10}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="feedback">Feedback</label>
                <textarea
                  name="data[feedback]"
                  className="form-control"
                  id="feedback"
                  rows="5"
                  placeholder="Write your feedback here"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-neutral">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default FeedBack;
