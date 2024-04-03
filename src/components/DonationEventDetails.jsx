import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { allEventsData } from "./DonationEventList"; // Import the exported events // To access route parameters

const DonationEventDetails = () => {
    const { eventId } = useParams() // Get event ID from route parameter
    const [eventData, setEventData] = useState(null);

   
    useEffect(() => {
        const event = allEventsData.find(event => event.id === parseInt(eventId)); // Find matching event
        setEventData(event); // Update state with found event data
      }, [eventId]);
    
      if (!eventData) {
        return <p>Loading event details...</p>;
      }
    

  return (
    <div>
       <h2>{eventData.title}</h2>
       <p>Date: {eventData.date}</p>
       <p>Time: {eventData.time}</p>
       <p>Location: {eventData.location}</p>
       <p>Description: {eventData.description}</p>

        
        
        </div>
  )
}

export default DonationEventDetails