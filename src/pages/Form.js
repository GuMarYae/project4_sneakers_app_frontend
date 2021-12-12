import Modal from "../components/Modal";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = ({ initialSneaker, handleSubmit, buttonLabel }) => {
  const navigate = useNavigate();

  // The Form State
  const [formData, setFormData] = useState(initialSneaker);

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // HandleSubmit for when the form submited
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault();
    // pass the formData to the handleSubmit function passes as props
    handleSubmit(formData);
    //push user back to main page
    navigate("/");
  };
  //==============================================
  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    zIndex: 1,

    //==============================================
  };

  //===================================++======
  const [isOpen, setIsOpen] = useState(false);
  //===================================++======

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Enter the fields here</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <br></br>
          <form onSubmit={handleSubmission}>
            <input
              type="text"
              placeholder="Enter Brand"
              onChange={handleChange}
              value={formData.brand}
              name="brand"
            />
            <input
              type="text"
              placeholder="Enter Name of Brand"
              onChange={handleChange}
              value={formData.name}
              name="name"
            />
            <input
              type="text"
              placeholder="Enter the Sale Price"
              onChange={handleChange}
              value={formData.cost}
              name="cost"
            />
            <input
              type="text"
              placeholder="Enter Year Release"
              onChange={handleChange}
              value={formData.year}
              name="year"
            />
            <input
              type="text"
              placeholder="Enter image URL"
              onChange={handleChange}
              value={formData.image}
              name="image"
            />
            <input type="submit" value={buttonLabel} />
          </form>
        </Modal>
        <Link to="/">
          <button>Go Back to Home</button>
        </Link>
      </div>
    </>
  );
};

export default Form;
