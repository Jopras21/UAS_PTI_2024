import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import "./feedback.css";

function FeedBack() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

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
        handleOpen();
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="feedback-container">
      <div className="tulisan">
      <h2>Contact Us</h2>
      <p>If you think our website needs improvements, please leave us a message and feedback by filling out this form section. <br/>
      Your feedback will be carefully considered by our team to help us improve the website.</p>
      </div>
      <div className="form-wrapper">
        <form id="sheetdb-form" onSubmit={handleSubmit}>
          <div className="formField">
            <input
              required
              type="text"
              name="data[name]"
              id="name"
              className="form-control"
            />
            <span>Name</span>
          </div>

          <div className="formField">
            <input
              required
              type="number"
              name="data[rating]"
              id="rating"
              className="form-control"
              min={1}
              max={10}
            />
            <span>Rating (1-10)</span>
          </div>

          <div className="formField">
            <input
              required
              name="data[feedback]"
              id="feedback"
              className="form-control"
              rows="5"
            ></input>
            <span>Feedback</span>
          </div>

          <Button type="submit" className="submit" variant="gradient">
            Submit
          </Button>
        </form>
      </div>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Thank You!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-16 w-16 text-base-500"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <Typography color="black" variant="h4">
            Terimakasih Atas Masukan dan Sarannya!
          </Typography>
          <Typography className="text-center font-normal">
            Masukan dan Saran anda telah berhasil diInput, terimakasih atas
            masukan dan sarannya!
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Close
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Ok
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default FeedBack;
