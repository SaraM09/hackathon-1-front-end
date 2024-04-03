import React, { useState } from 'react'

const CreateEventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date()); // Set default date to today

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    switch (type) {
      case 'text':
        setName(value);
        break;
      case 'date':
        setDate(new Date(value));
        break;
      case 'time':
        setTime(value);
        break;
      case 'file':
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

    // Validation logic here (e.g., check for required fields)

    // Submit form data (title, date, time, location, description, foodDonations, imageFile)
    console.log('Submitted event data:', {
      title,
      date,
      time,
      location,
      description,
      foodDonations,
      imageFile,
    });
    // Reset form after successful submission (optional)
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
        <input type="date" name="date" id="date" value={date.toISOString().split('T')[0]} onChange={handleInputChange} required />
      </div>
      </form>
  )
}

export default CreateEventForm