import React, { useState, useEffect } from 'react';
import './Styles/Global.css';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Tracker from './Pages/Tracker.jsx';
import Contact from './Pages/Contactus.jsx';

const INITIAL_LOGS = [
  { id: 1, type: 'exercise', title: 'Morning Run', category: 'Cardio', calories: 320, duration: 35, time: '07:30 AM' },
  { id: 2, type: 'meal', title: 'Oatmeal with Berries & Almonds', category: 'Breakfast', calories: 380, duration: null, time: '08:15 AM' },
  { id: 3, type: 'meal', title: 'Grilled Chicken Quinoa Bowl', category: 'Lunch', calories: 540, duration: null, time: '01:00 PM' },
  { id: 4, type: 'exercise', title: 'Evening Strength Circuit', category: 'Strength', calories: 210, duration: 25, time: '06:00 PM' },
];

function App() {
  const [activePage, setActivePage] = useState('home');

  const [logs, setLogs] = useState(() => {
    try {
      const saved = localStorage.getItem('healthtrack_logs');
      return saved ? JSON.parse(saved) : INITIAL_LOGS;
    } catch {
      return INITIAL_LOGS;
    }
  });

  const [waterCount, setWaterCount] = useState(() => {
    try {
      const saved = localStorage.getItem('healthtrack_water');
      return saved ? Number(saved) : 5;
    } catch {
      return 5;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('healthtrack_logs', JSON.stringify(logs));
    } catch {}
  }, [logs]);

  useEffect(() => {
    try {
      localStorage.setItem('healthtrack_water', String(waterCount));
    } catch {}
  }, [waterCount]);

  const stats = {
    burned: logs.filter((l) => l.type === 'exercise').reduce((s, i) => s + i.calories, 0),
    intake: logs.filter((l) => l.type === 'meal').reduce((s, i) => s + i.calories, 0),
    minutes: logs.filter((l) => l.type === 'exercise').reduce((s, i) => s + (i.duration || 0), 0),
    water: waterCount,
  };

  return (
    <div className="app-container">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="main-content">
        {activePage === 'home' && <Home setActivePage={setActivePage} stats={stats} />}
        {activePage === 'about' && <About setActivePage={setActivePage} />}
        {activePage === 'services' && <Services setActivePage={setActivePage} />}
        {activePage === 'tracker' && (
          <Tracker
            logs={logs}
            setLogs={setLogs}
            waterCount={waterCount}
            setWaterCount={setWaterCount}
          />
        )}
        {activePage === 'contact' && <Contact />}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
export default App;