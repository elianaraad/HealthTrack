import React from 'react';
import '../Styles/Home.css';
import heroImage from '../Assets/image.jpg';

const Home = ({
  setActivePage,
  stats = { burned: 0, intake: 0, water: 0, minutes: 0 },
}) => {
  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-badge">Personal Fitness & Wellness Companion</span>
            <h1>
              Track Your Daily Health, <span className="text-emerald">Master Your Habits.</span>
            </h1>
            <p className="hero-subtitle">
              HealthTrack empowers you to log workouts, monitor daily nutrition, and stay hydrated in one clean, intuitive dashboard designed for sustainable wellness.
            </p>
            <div className="hero-actions">
              <button onClick={() => handleNavigate('tracker')} className="btn-primary">
                Open My Tracker →
              </button>
              <button onClick={() => handleNavigate('services')} className="btn-secondary">
                Explore Features
              </button>
            </div>
          </div>

          {/* 2. Display your photo + Live Preview Card */}
          <div className="hero-visual">
            <img
              src={heroImage}
              alt="Personal fitness and wellness tracking"
              className="hero-photo"
            />

            <div className="snapshot-card">
              <div className="snapshot-header">
                <div>
                  <p className="snapshot-label">Today's Live Snapshot</p>
                  <h3>Your Wellness Overview</h3>
                </div>
                <span className="snapshot-status">Active Session</span>
              </div>

              <div className="snapshot-grid">
                <div className="stat-box stat-orange">
                  <p className="stat-title">🔥 Calories Burned</p>
                  <p className="stat-number">
                    {stats.burned} <span className="stat-unit">kcal</span>
                  </p>
                </div>

                <div className="stat-box stat-green">
                  <p className="stat-title">🥗 Calories Intake</p>
                  <p className="stat-number">
                    {stats.intake} <span className="stat-unit">kcal</span>
                  </p>
                </div>

                <div className="stat-box stat-blue">
                  <p className="stat-title">💧 Hydration</p>
                  <p className="stat-number">
                    {stats.water} <span className="stat-unit">/ 8 glasses</span>
                  </p>
                </div>

                <div className="stat-box stat-indigo">
                  <p className="stat-title">⏱️ Active Time</p>
                  <p className="stat-number">
                    {stats.minutes} <span className="stat-unit">mins</span>
                  </p>
                </div>
              </div>

              <button onClick={() => handleNavigate('tracker')} className="snapshot-btn">
                Update Your Daily Logs →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;