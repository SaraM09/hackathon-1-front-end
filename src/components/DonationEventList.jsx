import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import CardExploration from "./CardExploration";


const eventsData = [
  {
    id: 1,
    title: "Community Food Drive",
    date: "2023-04-15",
    time: "10:00 AM",
    location: "123 Main St, Anytown, USA",
    description:
      "Join us for a community food drive to support local shelters.",
    contact: {
      name: "Pharell Williams",
      email: "neptunes@virginiaisforlovers.com",
      phoneNumber: "123-456-7890",
    },
  },
  {
    id: 2,
    title: "Community Pizza Party",
    date: "2023-04-17",
    time: "11:00 AM",
    location: "456 Elm St, Michigan, USA",
    description:
      "Join us for a community pizza party to support local shelters.",
    contact: {
      name: "Missy Elliot",
      email: "bdonkbdonk@lifesabeach.com",
      phoneNumber: "234-567-8901",
    },
  },
  // Add more events as needed
];

const DonationEventList = () => {
  const [events, setEvents] = useState(eventsData);
  const [filter, setFilter] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events); // Maintain a filtered state for dynamic updates

  useEffect(() => {
    // Simulate fetching events from an API
    // For real applications, replace this with an actual API call
    setEvents(eventsData);
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());

    const filtered = events.filter(
      (event) =>
        event.title.toLowerCase().includes(filter) ||
        event.location.toLowerCase().includes(filter.toLowerCase()) ||
        event.description?.toLowerCase().includes(filter) // Optional: Search description if available
    );
    setFilteredEvents(filtered); // Update filtered events state for rendering
  };

  return (
    <div className="p-2">
      <h1>Upcoming Food Donation Events</h1>
      <input
        type="text"
        placeholder="Filter by title, location, or description"
        value={filter}
        onChange={handleFilterChange}
      />
      <CardGroup>
        <Card bg="Primary" style={{ width: "18rem" }} className="mb-2" border="primary" >
          <Card.Body>
     
            {filteredEvents.map((event, index) => (
              <ul key={index}>
                <Link to={`/events/${event.id}`}>
                  <Card.Header>{event.title}</Card.Header>
                </Link>
                <Card.Text>Date: {event.date}</Card.Text>
                <Card.Text>Time: {event.time}</Card.Text>
                <Card.Text>Location: {event.location}</Card.Text>
                {event.description && (
                  <Card.Text>Description: {event.description}</Card.Text>
                )}
              </ul>
            ))}
          </Card.Body>
        </Card>
      </CardGroup>

    </div>
   
  
  
  );
};

export default DonationEventList;

export const allEventsData = eventsData;
