import React, { useState, useRef } from "react";

const EditEventForm = ({ eventData, onSubmit }) => {
  const [title, setTitle] = useState(eventData.title);
  const [date, setDate] = useState(new Date(eventData.date)); // Set default date to today
  const [time, setTime] = useState(eventData.time);
  const [location, setLocation] = useState(eventData.location);
  const [description, setDescription] = useState(eventData.description);


  const handleChange = (event) => {
    const { value, name } = event.target;
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
      default:
       break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Validation checks
    const requiredFields = ['title', 'date', 'time', 'location'];
    const hasErrors = requiredFields.some((field) => field === '' || !field);

    if (hasErrors) {
      alert('Please fill in all required fields.'); 
      return;
    }

    // Submit form data (title, date, time, location, description, foodDonations, imageFile)
    console.log("Submitted event data:", {
      title,
      date,
      time,
      location,
      description,
    });
  

    onSubmit({ title, date: date.toISOString().split('T')[0], time, location, description });

  };
  return (
    <form onSubmit={handleSubmit}>
    <h2>Edit Event</h2>
    <label htmlFor="title">Title:</label>
    <input type="text" id="title" name="title" value={title} onChange={handleChange} required />
    <label htmlFor="date">Date:</label>
    <input type="date" id="date" name="date" value={date.toISOString().substring(0, 10)} onChange={handleChange} required />
    <label htmlFor="time">Time:</label>
    <input type="time" id="time" name="time" value={time} onChange={handleChange} required />
    <label htmlFor="location">Location:</label>
    <input type="text" id="location" name="location" value={location} onChange={handleChange} required />
    <label htmlFor="description">Description:</label>
    <textarea id="description" name="description" value={description} onChange={handleChange} />
    <button type="submit">Save Changes</button>
  </form>
  );
};

export default EditEventForm;
