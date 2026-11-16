import React from 'react';
import '../Styles/Home.css';

const Home = ({ setActivePage, stats }) => {
  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-badge">✨ Personal Fitness & Wellness Companion</span>
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

          {/* Live Preview Card */}
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
                <p className="stat-number">{stats.burned} <span className="stat-unit">kcal</span></p>
              </div>

              <div className="stat-box stat-green">
                <p className="stat-title">🥗 Calories Intake</p>
                <p className="stat-number">{stats.intake} <span className="stat-unit">kcal</span></p>
              </div>

              <div className="stat-box stat-blue">
                <p className="stat-title">💧 Hydration</p>
                <p className="stat-number">{stats.water} <span className="stat-unit">/ 8 glasses</span></p>
              </div>

              <div className="stat-box stat-indigo">
                <p className="stat-title">⏱️ Active Time</p>
                <p className="stat-number">{stats.minutes} <span className="stat-unit">mins</span></p>
              </div>
            </div>

            <button onClick={() => handleNavigate('tracker')} className="snapshot-btn">
              Update Your Daily Logs →
            </button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="pillars-header">
          <h2>Everything You Need for Daily Balance</h2>
          <p>Simple, focused tools built to keep your fitness and nutrition goals on track without unnecessary clutter.</p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon icon-orange">🔥</div>
            <h3>Exercise & Activity Logs</h3>
            <p>Record cardio, strength training, and flexibility routines with duration and calories burned to visualize your weekly momentum.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon icon-green">🥗</div>
            <h3>Smart Meal Tracking</h3>
            <p>Keep a clear record of breakfast, lunch, dinner, and snacks so you can maintain mindful calorie balance every single day.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon icon-blue">💧</div>
            <h3>Hydration & Habit Goals</h3>
            <p>Track your daily water intake glass by glass and monitor progress bars that update automatically as you log entries.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;