import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To access route parameters

const DonationEventDetails = () => {
    const { eventId } = useParams(); // Get event ID from route parameter
    const [eventData, setEventData] = useState(null);

  return (
    <div>DonationEventDetails</div>
  )
}

export default DonationEventDetails