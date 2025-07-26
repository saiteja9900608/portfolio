import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_bx6rzzb', 'template_rynaj87', form.current, 'Y4g9W2Jzc-v6CYIMk')
      .then(() => alert('Message sent successfully!'))
      .catch(err => alert('Failed to send message: ' + err.text));
  };

  return (
    <section id="contact" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4">
        <input type="text" name="user_name" placeholder="Your Name" className="w-full p-2 border rounded" required />
        <input type="email" name="user_email" placeholder="Your Email" className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-2 border rounded" required></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Send</button>
      </form>
    </section>
  );
};
export default Contact;
