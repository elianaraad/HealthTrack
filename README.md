# HealthTrack — Personal Fitness & Wellness Tracking Web App

**Course:** CSCI426: Advanced Web Programming — Project Phase 1 (Fall 2026)  
**Department:** Department of Computer Science and Information Technology  
**Theme:** HealthTrack – Personal Fitness and Wellness Tracking Web Application  
**Live Demo:** [Paste your Vercel or Netlify URL here]  
**GitHub Repository:** https://github.com/elianaraad/HealthTrack.git 

---

## Project Description
**HealthTrack** is a responsive frontend web application built with **ReactJS** and modular **Custom CSS** that enables users to log daily exercises, track meals and calorie intake, and monitor daily hydration goals in real time. All entries persist automatically in the browser using `localStorage`, providing immediate feedback on daily calorie balance without external paywalls or clutter.

### Key Features & Pages
1. **Home:** Hero introduction, live wellness snapshot card (`Calories Burned`, `Calories Intake`, `Hydration`, `Active Time`), and core wellness pillars.
2. **About:** Mission overview, behavioral health benefits of daily tracking, and academic project details.
3. **Features (Services):** Detailed breakdown of the four integrated modules (Workout Logger, Meal Diary, Hydration Counter, and Net Energy Analytics) with direct navigation to the tracker.
4. **My Tracker (Dynamic Page):** Interactive personal dashboard to add and delete workouts and meals, filter logs by category (`All`, `Exercise`, `Meal`), track daily water intake (`+1 Glass` / `-1`), and view live calorie goal progress bars.
5. **Contact:** Validated inquiry form with submission confirmation and an interactive FAQ accordion.

---

## Project Folder Structure
```text
HealthTrack/
├── public/
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── features.png
│   ├── tracker.png
│   └── contact.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Tracker.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Services.css
│   │   ├── Tracker.css
│   │   └── Contact.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md# health_track
