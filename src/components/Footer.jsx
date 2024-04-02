import React from 'react'

const Footer = () => {
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
    </footer>
  )
}

export default Footer