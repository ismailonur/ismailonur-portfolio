import React from 'react'
import './footer.css'

import T from '../../components/T'

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
          <a href='#'><T>home</T></a>
        </li>
        <li>
          <a href='#about'><T>about</T></a>
        </li>
        <li>
          <a href='#experience'><T>experience</T></a>
        </li>
        {/* <li>
          <a href='#services'>Services</a>
        </li> */}
        <li>
          <a href='#blog'><T>blog</T></a>
        </li>
        <li>
          <a href='#portfolio'><T>portfolio</T></a>
        </li>
        {/* <li>
          <a href='#testimonials'><T>testimonials</T></a>
        </li> */}
        <li>
          <a href='#contact'><T>contact</T></a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href='https://github.com/ismailonur' target='_blank'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/ismailonur15/' target='_blank'><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Copyright {yearNow}. <T>all_rights_reserved</T>
        </small>
      </div>
    </footer>
  )
}

export { Footer }