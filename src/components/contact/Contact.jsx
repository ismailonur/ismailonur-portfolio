import React from 'react'
import './contact.css'

import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>ismailonur15@gmail.com</h5>
            <a href="mailto:ismailonur15@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>+0905555555</h5>
            <a href="https://api.whatsapp.com/send?phone=905555555555">Send a message</a>
          </article>
        </div>
        <form action="">
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