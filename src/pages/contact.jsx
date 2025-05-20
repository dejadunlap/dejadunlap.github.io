import React from 'react';

function ContactForm() {
  return (
    <form>
      <label> Name:
        <input required type="text" />
      </label>
      <label> Email:
        <input required type="text" />
      </label>
      <label> Subject:
        <input required type="text" />
      </label>
      <label> Message:
        <input required type="text" />
      </label>
          <button type="submit">Let's Connect!</button>
    </form>
  )
}

export default function Contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <ContactForm />
      </div>
    );
};