import React, { useState, useRef } from "react";
// import { useHistory } from "react-router-dom";

const CreateEventForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date()); // Set default date to today
  const [time, setTime] = useState("");
  const locationRef = useRef(); // Ref for location input
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [foodDonations, setFoodDonations] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(""); // State for confirmation message
  // const history = useHistory(); // Hook for navigation

  const handleInputChange = (event) => {
    const { value, files, name } = event.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "date":
        setDate(new Date(value));
        break;
      case "time":
        setTime(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "file":
        setImageFile(files[0]);
        break;
      default:
        if (event.target.checked) {
          setFoodDonations([...foodDonations, value]);
        } else {
          setFoodDonations(foodDonations.filter((item) => item !== value));
        }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Validation checks
    const requiredFields = ['title', 'date', 'time', 'location'];
    const hasErrors = requiredFields.some((field) => field === '' || !field);

    if (hasErrors) {
      alert('Please fill in all required fields.'); // Replace with a user-friendly error display
      return;
    }

    // Submit form data (title, date, time, location, description, foodDonations, imageFile)
    console.log("Submitted event data:", {
      title,
      date,
      time,
      location,
      description,
      foodDonations,
      imageFile,
    });
    setConfirmationMessage("Event created successfully!");

     // Reset form fields to their initial state
     setTitle("");
     setDate(new Date());
     setTime("");
     setLocation("");
     setDescription("");
     setFoodDonations([]);
     setImageFile(null);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Food Donation Event</h2>
      <div className="form-group">
        <label htmlFor="title">Event Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date.toISOString().split("T")[0]}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          name="time"
          id="time"
          value={time}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          ref={locationRef}
          value={location}
          onChange={handleInputChange}
          placeholder="Enter full address or general area"
        />
      </div>
      {/* Button to open Google Maps in a new tab */}
<button
        onClick={() => window.open("https://www.google.com/maps/place/" + locationRef.current.value, "_blank")}
        className="btn btn-primary col-lg-5 mx-1 mb-1"
      >
        View Map
      </button>
      <div className="form-group">
        <label htmlFor="description">Description (Optional):</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="foodDonations">Food Donations (Optional):</label>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="cannedGoods"
            name="foodDonations"
            value="Canned Goods"
            onChange={handleInputChange}
          />
          <label htmlFor="cannedGoods">Canned Goods</label>
          <br />
          <input
            type="checkbox"
            id="nonPerishables"
            name="foodDonations"
            value="Non-Perishables"
            onChange={handleInputChange}
          />
          <label htmlFor="nonPerishables">Non-Perishables</label>
          <br />
          <input
            type="checkbox"
            id="freshProduce"
            name="foodDonations"
            value="Fresh Produce"
            onChange={handleInputChange}
          />
          <label htmlFor="freshProduce">Fresh Produce</label>
          <br />
          <input
            type="text"
            name="foodDonations"
            id="otherDonations"
            placeholder="Other (list comma separated)"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="imageFile">Image Upload (Optional):</label>
        <input type="file" name="imageFile"></input>
      </div>
      <div className="form-group">
        <button type="submit">Create Event</button>
      </div>

       {/* Display confirmation message if set */}
       {confirmationMessage && <p>{confirmationMessage}</p>}
  
    </form>
  );
};

export default CreateEventForm;
