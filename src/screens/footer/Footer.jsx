import React from 'react'
import './footer.css'

import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { useEffect } from 'react'

const Footer = () => {
  const [yearNow , setYearNow] = React.useState(2022)

  useEffect(() => {
    setYearNow(new Date().getFullYear())
  }, [])

  return (
    <footer>
      <a href='#' className='footer__logo'>İsmail Onur</a>

      <ul className="permalinks">
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        {/* <li>
          <a href='#services'>Services</a>
        </li> */}
        <li>
          <a href='#blog'>Blog</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href='https://github.com/ismailonur' target='_blank'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/ismailonur15/' target='_blank'><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Copyright {yearNow}. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export { Footer }