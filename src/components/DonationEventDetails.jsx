import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To access route parameters
import { allEventsData } from "./DonationEventList"; // Import the exported events 
import EditEventForm from "./EditEventForm";
import RsvpForm from "./RsvpForm";

const DonationEventDetails = () => {
    const { eventId } = useParams() // Get event ID from route parameter
    const [ eventData, setEventData ] = useState(null);
    const [ isEditing, setIsEditing ] = useState(false);

   
    useEffect(() => {
        const event = allEventsData.find(event => event.id === parseInt(eventId)); // Find matching event
        setEventData(event); // Update state with found event data
     
      }, [eventId]);
    
      if (!eventData) {
        return <p>Loading event details...</p>;
      }

      const handleEditEvent = () => {
    
        setIsEditing(!isEditing); // Toggle edit mode
      };

      const handleFormSubmit = (updatedData) => {
        // Placeholder for backend update logic (replace with API call)
        console.log(eventData, updatedData)
        console.log('Updated event data:', updatedData);
        setEventData(updatedData)
        setIsEditing(false); // Go back to view mode
      };

      const handleRsvp = async (eventId, attending) => {
        // Placeholder for backend logic to update RSVP status (replace with API call)
        console.log('RSVP update:', eventId, attending);
      };
    

  return (
    <div>
       <h2>{eventData.title}</h2>
       <p>Date: {eventData.date}</p>
       <p>Time: {eventData.time}</p>
       <p>Location: {eventData.location}</p>
       <p>Description: {eventData.description}</p>
        {/* Contact information (optional) */}
        {eventData.contact && (
        <div>
          <h3>Contact</h3>
          <p>{eventData.contact.name}</p>
          <p>{eventData.contact.email}</p>
          {/* Phone number, website, etc. can be added here */}
          <p>{eventData.contact.phoneNumber}</p>
           {/* Edit Event Button */}
      <button onClick={handleEditEvent} disabled={isEditing}>{isEditing ? 'Cancel Edit' : 'Edit Event'}</button>
      {isEditing && (
        <EditEventForm eventData={eventData} onSubmit={handleFormSubmit} />
      )}

        </div>
      )} 
      <RsvpForm eventId={eventId} onRsvp={handleRsvp} />
  
        </div>
  )
}

export default DonationEventDetails