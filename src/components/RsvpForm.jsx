import React, { useState, useEffect } from "react";


const RsvpForm = ({ eventId, onRsvp }) => {
  const [isAttending, setIsAttending] = useState(false); // Track RSVP status

  const handleRsvp = async () => {
    setIsAttending(!isAttending); // Toggle attendance state locally
    onRsvp(eventId, !isAttending); // Call parent function to handle RSVP logic (placeholder for API call)
  };


  return (
    <button onClick={handleRsvp}>
      {isAttending ? "Un-RSVP" : "RSVP (Attend Event)"}
    </button>
  );
};

export default RsvpForm;
