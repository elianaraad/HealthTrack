import  { useState } from 'react';
import Logo from '../Assets/Logo.jpg';
import '../Styles/Navbar.css';

const Navbar = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Features' },
    { id: 'tracker', label: 'My Tracker' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
    <nav className="navbar">
      <div className="container nav-inner">
        <button onClick={() => handleNavigate('home')} className="logo-btn">
          <img src={Logo} alt="HealthTrack Logo" className="logo-image" />
        </button>

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`nav-btn ${activePage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`nav-btn ${activePage === item.id ? 'active' : ''}`}
              style={{ textAlign: 'left' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
export default Navbar;