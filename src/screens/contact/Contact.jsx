import React, { useRef } from 'react';
import './contact.css'

import T from '../../components/T';

import { MdOutlineEmail } from 'react-icons/md'
import { BsTelegram } from 'react-icons/bs'

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
      <h5><T>get_in_touch</T></h5>
      <h2><T>contact_me</T></h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" aria-hidden="true" />
            <h4>Email</h4>
            <h5>ismailonurdev@gmail.com</h5>
            <a 
              href="mailto:ismailonurdev@gmail.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Send an email to ismailonurdev@gmail.com">
              <T>send_a_message</T>
            </a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__icon" aria-hidden="true" />
            <h4>Telegram</h4>
            <a 
              href="https://t.me/ionurdev" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Send a message on Telegram">
              <T>send_a_message</T>
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} aria-label="Contact form">
          <label htmlFor="contact-name" className="sr-only">Your Full Name</label>
          <input 
            type="text" 
            id="contact-name"
            name='name' 
            placeholder="Your Full Name"
            aria-required="true"
            required 
          />
          
          <label htmlFor="contact-email" className="sr-only">Your Email</label>
          <input 
            type="email" 
            id="contact-email"
            name='email' 
            placeholder="Your Email"
            aria-required="true"
            required 
          />
          
          <label htmlFor="contact-message" className="sr-only">Your Message</label>
          <textarea 
            id="contact-message"
            name="message" 
            cols="30" 
            rows="10" 
            placeholder="Your Message"
            aria-required="true"
            required>
          </textarea>
          
          <button 
            type="submit" 
            className='btn btn-primary'
            aria-label="Send contact message">
            <T>send_message</T>
          </button>
        </form>
      </div>
    </section>
  )
}

export { Contact }