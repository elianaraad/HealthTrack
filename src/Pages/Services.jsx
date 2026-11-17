import React from 'react';
import '../Styles/Services.css';

const Services = ({ setActivePage }) => {
  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      emoji: '🏋️‍♂️',
      title: 'Workout & Routine Logger',
      badge: 'Fitness',
      bgClass: 'bg-orange',
      desc: 'Log running, cycling, strength workouts, or yoga sessions. Track exact workout duration in minutes and estimated calories burned.',
    },
    {
      emoji: '🍎',
      title: 'Daily Meal & Calorie Diary',
      badge: 'Nutrition',
      bgClass: 'bg-green',
      desc: 'Categorize meals across Breakfast, Lunch, Dinner, and Snacks. Keep track of caloric intake to stay aligned with your wellness targets.',
    },
    {
      emoji: '🥤',
      title: 'Interactive Hydration Counter',
      badge: 'Hydration',
      bgClass: 'bg-blue',
      desc: 'Monitor your daily 8-glass water goal with one-click increment and decrement controls and visual progress tracking.',
    },
    {
      emoji: '📈',
      title: 'Real-Time Net Energy Analytics',
      badge: 'Insights',
      bgClass: 'bg-indigo',
      desc: 'Automatically calculates net calories (Intake minus Burned) and active minutes so you always know where you stand today.',
    },
  ];

  return (
    <div className="container services-page">
      <div className="services-header">
        <span className="section-tag">Platform Features</span>
        <h1>Tools Designed for Complete Wellness</h1>
        <p>Explore the four integrated modules that power HealthTrack's personal tracking experience.</p>
      </div>

      <div className="services-grid">
        {features.map((feat, index) => (
          <div key={index} className="service-card">
            <div>
              <div className="service-top">
                <div className={`service-emoji ${feat.bgClass}`}>{feat.emoji}</div>
                <span className="service-badge">{feat.badge}</span>
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>

            <button onClick={() => handleNavigate('tracker')} className="service-link">
              Try this in My Tracker →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services;