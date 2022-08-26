
import './contact.css'

import { MdOutlineEmail } from 'react-icons/md'
import { BsTelegram } from 'react-icons/bs'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fbnuyi8', 'template_a2fhoq2', form.current, 'W5haRKG91PtuXIVL3')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>ismailonurdev@gmail.com</h5>
            <a href="mailto:ismailonurdev@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__icon" />
            <h4>Telegram</h4>
            <a href="https://t.me/ionurdev" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export { Contact }