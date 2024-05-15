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

        <Button type="submit" variant="gradient">
          Submit
        </Button>
      </form>

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
          <Typography color="red" variant="h4">
            Terimakasih Atas Masukan dan Sarannya!
          </Typography>
          <Typography className="text-center font-normal">
            Masukan dan Saran anda telah berhasil diInput, terimakasih atas masukan dan sarannya!
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
