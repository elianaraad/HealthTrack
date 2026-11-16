import React from 'react';
import '../Styles/Footer.css';

const Footer = ({ setActivePage }) => {
  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (


        <div className="footer-bottom">
          <p>© 2026 HealthTrack Wellness System. All rights reserved.</p>
        
        </div>
  );
}
export default Footer;