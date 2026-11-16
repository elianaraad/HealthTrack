import React, { useState } from 'react';
import '../Styles/Tracker.css';

const Tracker = ({ logs, setLogs, waterCount, setWaterCount }) => {
  const [entryType, setEntryType] = useState('exercise');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Cardio');
  const [calories, setCalories] = useState('');
  const [duration, setDuration] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [formError, setFormError] = useState('');

  const handleTypeSwitch = (type) => {
    setEntryType(type);
    setCategory(type === 'exercise' ? 'Cardio' : 'Breakfast');
    setFormError('');
  };

  const handleAddLog = (e) => {
    e.preventDefault();
    if (!title.trim() || !calories || Number(calories) <= 0) {
      setFormError('Please enter a valid activity/meal name and calories.');
      return;
    }

    const newEntry = {
      id: Date.now(),
      type: entryType,
      title: title.trim(),
      category,
      calories: Number(calories),
      duration: entryType === 'exercise' ? Number(duration) || 30 : null,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setLogs([newEntry, ...logs]);
    setTitle('');
    setCalories('');
    setDuration('');
    setFormError('');
  };

  const handleDeleteLog = (id) => {
    setLogs(logs.filter((item) => item.id !== id));
  };

  const totalBurned = logs
    .filter((l) => l.type === 'exercise')
    .reduce((sum, item) => sum + item.calories, 0);

  const totalIntake = logs
    .filter((l) => l.type === 'meal')
    .reduce((sum, item) => sum + item.calories, 0);

  const netCalories = totalIntake - totalBurned;

  const filteredLogs = logs.filter((item) => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  return (
    <div className="container tracker-page">
      <div className="tracker-header">
        <div>
          <h1>Personal Wellness Tracker</h1>
          <p>Log your exercises, meals, and hydration in real time.</p>
        </div>
        <div className="autosave-badge">✓ Auto-saved to Browser</div>
      </div>

      {/* Summary Metric Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-top text-orange">
            <span>Calories Burned</span>
            <span>🔥</span>
          </div>
          <p className="metric-value">{totalBurned} <span className="metric-unit">kcal</span></p>
          <div className="progress-track">
            <div className="progress-orange" style={{ width: `${Math.min((totalBurned / 600) * 100, 100)}%` }} />
          </div>
          <p className="metric-sub">Daily Goal: 600 kcal</p>
        </div>

        <div className="metric-card">
          <div className="metric-top text-green">
            <span>Calories Intake</span>
            <span>🥗</span>
          </div>
          <p className="metric-value">{totalIntake} <span className="metric-unit">kcal</span></p>
          <div className="progress-track">
            <div className="progress-green" style={{ width: `${Math.min((totalIntake / 2200) * 100, 100)}%` }} />
          </div>
          <p className="metric-sub">Daily Target: 2,200 kcal</p>
        </div>

        <div className="metric-card">
          <div className="metric-top text-indigo">
            <span>Net Calories</span>
            <span>⚡</span>
          </div>
          <p className="metric-value">{netCalories} <span className="metric-unit">kcal</span></p>
          <p className="metric-sub" style={{ marginTop: '20px' }}>Intake minus Exercise Burned</p>
        </div>

        <div className="metric-card">
          <div className="metric-top text-sky">
            <span>Water Intake</span>
            <span>💧</span>
          </div>
          <p className="metric-value">{waterCount} <span className="metric-unit">/ 8 glasses</span></p>
          <div className="water-controls">
            <button onClick={() => setWaterCount(Math.max(0, waterCount - 1))} className="btn-water-minus">-1</button>
            <button onClick={() => setWaterCount(Math.min(15, waterCount + 1))} className="btn-water-plus">+1 Glass</button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="dashboard-grid">
        {/* Add Entry Form */}
        <div className="panel-card">
          <h2>Add New Entry</h2>

          <div className="type-switch">
            <button
              type="button"
              onClick={() => handleTypeSwitch('exercise')}
              className={`switch-btn ${entryType === 'exercise' ? 'active-orange' : ''}`}
            >
              Exercise
            </button>
            <button
              type="button"
              onClick={() => handleTypeSwitch('meal')}
              className={`switch-btn ${entryType === 'meal' ? 'active-green' : ''}`}
            >
              Meal / Food
            </button>
          </div>

          <form onSubmit={handleAddLog}>
            <div className="form-group">
              <label>{entryType === 'exercise' ? 'Workout Name' : 'Meal Description'}</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={entryType === 'exercise' ? 'e.g., Morning Jog' : 'e.g., Grilled Chicken Salad'}
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-input">
                  {entryType === 'exercise' ? (
                    <>
                      <option value="Cardio">Cardio</option>
                      <option value="Strength">Strength</option>
                      <option value="Flexibility">Flexibility</option>
                      <option value="Sports">Sports</option>
                    </>
                  ) : (
                    <>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Snack">Snack</option>
                    </>
                  )}
                </select>
              </div>

              <div className="form-group">
                <label>{entryType === 'exercise' ? 'Calories Burned' : 'Calories (kcal)'}</label>
                <input
                  type="number"
                  min="1"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder="250"
                  className="form-input"
                />
              </div>
            </div>

            {entryType === 'exercise' && (
              <div className="form-group">
                <label>Duration (minutes)</label>
                <input
                  type="number"
                  min="1"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="30"
                  className="form-input"
                />
              </div>
            )}

            {formError && <p className="error-text">{formError}</p>}

            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              + Add to Today's Log
            </button>
          </form>
        </div>

        {/* Activity Feed */}
        <div className="panel-card">
          <div className="feed-header">
            <h2>Today's Activity & Meal Feed</h2>
            <div className="filter-tabs">
              {['all', 'exercise', 'meal'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilterType(tab)}
                  className={`filter-btn ${filterType === tab ? 'active' : ''}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {filteredLogs.length === 0 ? (
            <div className="empty-state">
              <p><strong>No logs found for this filter.</strong></p>
              <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>Use the form on the left to record your first entry!</p>
            </div>
          ) : (
            <div>
              {filteredLogs.map((item) => (
                <div key={item.id} className="log-item">
                  <div className="log-left">
                    <div className={`log-icon ${item.type === 'exercise' ? 'icon-orange' : 'icon-green'}`}>
                      {item.type === 'exercise' ? '🔥' : '🥗'}
                    </div>
                    <div>
                      <p className="log-title">{item.title}</p>
                      <div className="log-meta">
                        <span className="log-category">{item.category}</span>
                        {item.duration && <span>⏱️ {item.duration} mins</span>}
                        <span>• {item.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="log-right">
                    <span className={`log-calories ${item.type === 'exercise' ? 'text-orange' : 'text-green'}`}>
                      {item.type === 'exercise' ? `-${item.calories}` : `+${item.calories}`} kcal
                    </span>
                    <button onClick={() => handleDeleteLog(item.id)} className="delete-btn" title="Delete entry">
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Tracker;