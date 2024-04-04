import React, {useState} from 'react'
import "../footer.css"

const Footer = () => {

   // State to manage the ball's position
 const [ballPosition, setBallPosition] = useState({ top: '50%', left: '50%' });

 // Function to generate a random position for the ball
 const getRandomPosition = () => {
  const top = Math.random() * 80 + 10; // Random value between 10% and 90%
  const left = Math.random() * 80 + 10; // Random value between 10% and 90%
  return { top: `${top}%`, left: `${left}%` };
};

 // Event handler for mouseover
 const handleMouseOver = () => {
  setBallPosition(getRandomPosition());
};


  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Foodbriiite. All rights reserved.</p>
        <p>Contact us at: contact@foodbriiite.com</p>
        {/* <p>Follow us on social media:</p>
        <ul className="social-media-links">
          <li><a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul> */}
      </div>
      <div className="ball"
      style={{ top: ballPosition.top, left: ballPosition.left }}
      onMouseOver={handleMouseOver}
      ></div>
    </footer>
  )
}

export default Footer