import React, { useState } from 'react'

const CreateEventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());// Set default date to today
  const [time, setTime] = useState(''); 
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

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
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input type="time" name="time" id="time" value={time} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Enter full address or general area"
        />
        </div>
        {/* Optional map integration can be added here */}
        <div className="form-group">
        <label htmlFor="description">Description (Optional):</label>
        <textarea name="description" id="description" value={description} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="foodDonations">Food Donations (Optional):</label>
        <div className="checkbox-group">
          <input type="checkbox" id="cannedGoods" name="foodDonations" value="Canned Goods" onChange={handleInputChange} />
          <label htmlFor="cannedGoods">Canned Goods</label>
          <br />
          <input type="checkbox" id="nonPerishables" name="foodDonations" value="Non-Perishables" onChange={handleInputChange} />
          <label htmlFor="nonPerishables">Non-Perishables</label>
          <br />
          <input type="checkbox" id="freshProduce" name="foodDonations" value="Fresh Produce" onChange={handleInputChange} />
          <label htmlFor="freshProduce">Fresh Produce</label>
          <br />
          <input type="text" name="foodDonations" id="otherDonations" placeholder="Other (list comma separated)" onChange={handleInputChange} />
        </div>
        </div>
      </form>
  )
}

export default CreateEventForm