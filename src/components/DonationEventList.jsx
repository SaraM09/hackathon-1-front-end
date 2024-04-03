import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const eventsData = [
  {
    id: 1,
    title: "Community Food Drive",
    date: "2023-04-15",
    time: "10:00 AM",
    location: "123 Main St, Anytown, USA",
    description:
      "Join us for a community food drive to support local shelters.",
  },
  {
    id: 2,
    title: "Community Pizza Party",
    date: "2023-04-17",
    time: "11:00 AM",
    location: "456 Elm St, Michigan, USA",
    description:
      "Join us for a community pizza party to support local shelters.",
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


 const filtered = events.filter((event) =>
 event.title.toLowerCase().includes(filter) ||
 event.location.toLowerCase().includes(filter.toLowerCase()) ||
 event.description?.toLowerCase().includes(filter) // Optional: Search description if available
);
setFilteredEvents(filtered); // Update filtered events state for rendering
};


  return ( 
  <div>
    <h1>Upcoming Food Donation Events</h1>
    <input
        type="text"
        placeholder="Filter by title, location, or description"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredEvents.map((event, index) => (
          <li key={index}>
            <Link to={`/events/${event.id}`}>
            <h2>{event.title}</h2>
            </Link>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            {event.description && <p>Description: {event.description}</p>}
          </li>
        ))}
      </ul>
    </div>


  )
};

export default DonationEventList;
