import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          e.target.reset();
          setTimeout(() => setStateMessage(null), 5000);
        },
        (error) => {
          setStateMessage('Something went wrong. Please try again later.');
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
        }
      );
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '80vh',
        width: '100%',
        padding: '40px',
        boxSizing: 'border-box',
      }}
    >
      {/* Left Column */}
      <div
        style={{
          flex: 1,
          paddingRight: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Contact Me</h2>
        <img
          src="/hackathon.jpg"
          alt="Black women posing in front of white board with team in foreground"
          style={{
            width: '350px',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />
        <figcaption style={{ paddingTop: '10px' }}>
          JPMorgan Code For Good Hackathon 2025
        </figcaption>
      </div>

      {/* Right Column (Form) */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          padding: '20px',
          height: 'auto',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          onSubmit={sendEmail}
        >
          <div>
            <label>Name</label>
            <input
              type="text"
              name="from_name"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="reply_to"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              rows={5}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                resize: 'vertical',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: isSubmitting ? '#ccc' : '#0077cc',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          >
            {isSubmitting ? 'Sending...' : 'Let’s Connect!'}
          </button>

          {stateMessage && (
            <p style={{ marginTop: '10px', color: '#0077cc' }}>{stateMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
