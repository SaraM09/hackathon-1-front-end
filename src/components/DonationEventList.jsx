import React, { useState, useEffect } from "react";

const eventsData = [
  {
    title: "Community Food Drive",
    date: "2023-04-15",
    time: "10:00 AM",
    location: "123 Main St, Anytown, USA",
    description:
      "Join us for a community food drive to support local shelters.",
  },
  {
    title: "Community Food Drive",
    date: "2023-04-17",
    time: "11:00 AM",
    location: "456 Elm St, Michigan, USA",
    description:
      "Join us for a community food drive to support local shelters.",
  },
  // Add more events as needed
];

const DonationEventList = () => {
  const [events, setEvents] = useState(eventsData);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Simulate fetching events from an API
    // For real applications, replace this with an actual API call
    setEvents(eventsData);
 }, []);

 const handleFilterChange = (event) => {
    setFilter(event.target.value);
 };

 const filteredEvents = events.filter((event) =>
 event.location.toLowerCase().includes(filter.toLowerCase())
);



  return ( 
  <div>
    <h1>Upcoming Food Donation Events</h1>
    <input
        type="text"
        placeholder="Filter by location"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredEvents.map((event, index) => (
          <li key={index}>
            <h2>{event.title}</h2>
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
