import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setStatus('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('Please complete all fields.');
      return;
    }
    setStatus('Thanks! This is a demo form and is not connected to an email service yet.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page content-page contact-page">
      <section className="page-intro">
        <p className="eyebrow">SAY HELLO</p>
        <h1>Let’s <span>connect</span></h1>
        <p>Have a question, an idea or an opportunity to share? Leave a message below.</p>
      </section>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Your name<input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" /></label>
        <label>Email address<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" /></label>
        <label>Message<textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Write your message..." /></label>
        <button className="button button-primary" type="submit">Send message</button>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>
    </div>
  );
}
