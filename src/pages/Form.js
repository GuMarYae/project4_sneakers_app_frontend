import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        placeholder="Enter brand"
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
  );
};

export default Form;
