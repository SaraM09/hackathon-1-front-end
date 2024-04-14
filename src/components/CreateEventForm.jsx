import React, { useState, useRef } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
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
    <div>
    <Card className="border-5" style={{ borderColor: '#DCE1DE', background: '#DCE1DE' }}>
    <Card.Body>
    <Form onSubmit={handleSubmit}>
      <h2>Create Food Donation Event</h2>
      <Row>
        <Col md={6}>
          <Form.Group controlId="title">
            <Form.Label>Event Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={date.toISOString().split("T")[0]}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="time">
            <Form.Label>Time:</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={time}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="location">
            <Form.Label>Location:</Form.Label>
            <Form.Control
              type="text"
              name="location"
              ref={locationRef}
              value={location}
              onChange={handleInputChange}
              placeholder="Enter full address or general area"
            />
          </Form.Group>
          <Button style={{ backgroundColor: '#49A078', borderColor: '#DCE1DE'}}
            onClick={() =>
              window.open("https://www.google.com/maps/place/" + locationRef.current.value, "_blank")
            }
            className="btn btn-primary col-lg-5 mx-1 mb-1"
          >
            View Map
          </Button>
        </Col>
      </Row>
      <Form.Group controlId="description">
        <Form.Label>Description (Optional):</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="foodDonations">
        <Form.Label>Food Donations (Optional):</Form.Label>
        <div className="checkbox-group">
          <Form.Check
            type="checkbox"
            id="cannedGoods"
            name="foodDonations"
            value="Canned Goods"
            onChange={handleInputChange}
            label="Canned Goods"
          />
          <Form.Check
            type="checkbox"
            id="nonPerishables"
            name="foodDonations"
            value="Non-Perishables"
            onChange={handleInputChange}
            label="Non-Perishables"
          />
          <Form.Check
            type="checkbox"
            id="freshProduce"
            name="foodDonations"
            value="Fresh Produce"
            onChange={handleInputChange}
            label="Fresh Produce"
          />
          <Form.Control
            type="text"
            name="foodDonations"
            id="otherDonations"
            placeholder="Other (list comma separated)"
            onChange={handleInputChange}
          />
        </div>
      </Form.Group>
      <Form.Group controlId="imageFile">
        <Form.Label>Image Upload (Optional):</Form.Label>
        <Form.Control type="file" name="imageFile" />
      </Form.Group>
      <Button type="submit" style={{ backgroundColor: '#49A078', borderColor: '#DCE1DE'}}>Create Event</Button>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </Form>
    </Card.Body>
    </Card>
    </div>
  );
};

export default CreateEventForm;
