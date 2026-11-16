import React, { useState } from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <span className="section-tag">Contact & Support</span>
        <h1>Get in Touch With Us</h1>
        <p>Have feedback on HealthTrack or questions about your wellness dashboard? Send us a message below.</p>
      </div>

      <div className="contact-grid">
        <div>
          <div className="info-card">
            <h3>Contact Information</h3>
            <p>We welcome feature suggestions, bug reports, and wellness tracking inquiries.</p>
            <div className="info-item"><span>✉️</span><span>support@healthtrack-app.edu</span></div>
            <div className="info-item"><span>📞</span><span>+1 (555) 234-5678</span></div>
            <div className="info-item"><span>📍</span><span>CS & IT Department, Wellness Lab</span></div>
        
          
        </div>
</div>
        <div className="contact-form-card">
          {submitted ? (
            <div className="success-box">
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>
                Thank you, <strong>{formData.name}</strong>. We have received your inquiry and will reply to{' '}
                <strong>{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="btn-primary"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Johnson"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Feature request or question"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="form-input"
                />
              </div>

              <button type="submit" className="btn-primary">
                Submit Inquiry →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
export default Contact;