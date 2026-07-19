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

  const inputClass = "py-3 px-4 rounded-xl border border-border-main bg-bg-surf-subtle text-text-main outline-none focus:border-brand focus:bg-bg-surf focus:shadow-[0_0_0_3px_var(--glow-color)] transition-all duration-150 form-input";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full p-8 rounded-xl bg-bg-surf border border-border-main shadow-sm contact-form">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="form-name" className="text-sm font-bold text-text-main">Your Name</label>
        <input
          id="form-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="form-email" className="text-sm font-bold text-text-main">Email Address</label>
        <input
          id="form-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="johndoe@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="form-subject" className="text-sm font-bold text-text-main">Subject</label>
        <input
          id="form-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Inquiry about project..."
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="form-message" className="text-sm font-bold text-text-main">Message</label>
        <textarea
          id="form-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className={`${inputClass} resize-y`}
          placeholder="Tell me about your project or inquiry..."
        />
      </div>

      <Button type="submit" disabled={loading} variant="primary" className="mt-2 w-full">
        {loading ? 'Sending Inquiry...' : 'Send Message'}
      </Button>

      {submitted && (
        <div className="p-4 bg-[hsla(140,50%,50%,0.15)] border border-[hsl(140,50%,50%)] text-green-700 dark:text-green-300 rounded-xl text-center text-sm font-semibold">
          Thank you! Your message was sent successfully.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
