import React from 'react';
import '../Styles/About.css';

const About = ({ setActivePage }) => {
  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-page">
      <div className="about-header">
        <span className="section-tag">About HealthTrack</span>
        <h1>Built for Everyday Wellness, Designed for Clarity</h1>
        <p>
          HealthTrack was created to solve a common real-world challenge: most fitness apps overwhelm users with complex charts and paywalls. We focus on the daily fundamentals that actually build lasting habits.
        </p>
      </div>

      <div className="about-box">
        <div>
          <h2>Why Daily Tracking Works</h2>
          <p>
            Research in behavioral health consistently shows that simply recording meals and physical activity increases self-awareness and accountability. When you can see your energy intake alongside calories burned, making healthier choices becomes effortless.
          </p>
          <ul className="check-list">
            {[
              'Instant feedback on daily calorie balance',
              'Zero-friction logging for exercises and meals',
              'Local browser persistence so your logs stay saved',
              'Responsive design accessible on mobile and desktop',
            ].map((point, idx) => (
              <li key={idx}>
                <span className="check-icon">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-stats-grid">
          <div className="mini-card mini-emerald">
            <div className="mini-emoji">❤️</div>
            <p className="mini-number">100%</p>
            <p className="mini-label">Focused on Holistic Health</p>
          </div>
          <div className="mini-card mini-teal">
            <div className="mini-emoji">🎯</div>
            <p className="mini-number">3 Core</p>
            <p className="mini-label">Wellness Pillars Tracked</p>
          </div>
          <div className="mini-card mini-sky">
            <div className="mini-emoji">🏆</div>
            <p className="mini-number" style={{ fontSize: '1.1rem' }}>CSCI426 Capstone Project</p>
            <p className="mini-label">Developed with ReactJS & Custom CSS</p>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <div>
          <h3>Ready to start logging your day?</h3>
          <p>Jump straight into your interactive personal dashboard.</p>
        </div>
        <button onClick={() => handleNavigate('tracker')} className="btn-primary">
          Go to My Tracker
        </button>
      </div>
    </div>
  );
}
export default About;