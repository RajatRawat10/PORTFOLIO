import React, { useState } from 'react';
import Button from '../../components/ui/Button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success status after a delay
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    width: '100%',
    padding: '2rem',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem'
  };

  const labelStyle = {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: 'var(--text-primary)'
  };

  const inputStyle = {
    padding: '0.75rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-surface-subtle)',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'all var(--transition-fast)'
  };

  const focusStyle = `
    .form-input:focus {
      border-color: var(--color-accent) !important;
      background-color: var(--bg-surface) !important;
      box-shadow: 0 0 0 3px var(--glow-color);
    }
  `;

  return (
    <form style={formStyle} onSubmit={handleSubmit} className="contact-form">
      <style>{focusStyle}</style>

      <div style={inputGroupStyle}>
        <label htmlFor="form-name" style={labelStyle}>Your Name</label>
        <input
          id="form-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
          className="form-input"
          placeholder="John Doe"
        />
      </div>

      <div style={inputGroupStyle}>
        <label htmlFor="form-email" style={labelStyle}>Email Address</label>
        <input
          id="form-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
          className="form-input"
          placeholder="johndoe@example.com"
        />
      </div>

      <div style={inputGroupStyle}>
        <label htmlFor="form-subject" style={labelStyle}>Subject</label>
        <input
          id="form-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          style={inputStyle}
          className="form-input"
          placeholder="Inquiry about project..."
        />
      </div>

      <div style={inputGroupStyle}>
        <label htmlFor="form-message" style={labelStyle}>Message</label>
        <textarea
          id="form-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ ...inputStyle, resize: 'vertical' }}
          className="form-input"
          placeholder="Tell me about your project or inquiry..."
        />
      </div>

      <Button type="submit" disabled={loading} variant="primary" style={{ marginTop: '0.5rem', width: '100%' }}>
        {loading ? 'Sending Inquiry...' : 'Send Message'}
      </Button>

      {submitted && (
        <div style={{
          padding: '1rem',
          backgroundColor: 'hsla(140, 50%, 50%, 0.15)',
          border: '1px solid hsl(140, 50%, 50%)',
          color: 'light-dark(hsl(140, 50%, 20%), hsl(140, 50%, 75%))',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          fontSize: '0.9rem',
          fontWeight: '600'
        }}>
          Thank you! Your message was sent successfully.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
