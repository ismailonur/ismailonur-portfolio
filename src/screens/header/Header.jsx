import React from 'react'
import './header.css'

import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h4>Hello I'm</h4>
        <h1>İsmail Onur</h1>
        <h4>Software Engineer</h4>
        <h5>Mobile (React-Native) Developer</h5>
        <h5>React.js Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export { Header }