import React from 'react'
import { useState } from 'react'
import './nav.css'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

import useAnalyticsEventTracker from '../../components/useAnalyticsEventTracker/useAnalyticsEventTracker'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const gaEventTracker = useAnalyticsEventTracker();

  const handleNavClick = (text) => {
    setActiveNav(text)
    gaEventTracker(text)
  }

  return (
    <nav aria-label="Main navigation">
      <a
        href="#"
        onClick={() => handleNavClick('#')}
        className={activeNav === '#' ? 'active' : ''}
        aria-label="Go to home section"
        aria-current={activeNav === '#' ? 'page' : undefined}>
        <AiOutlineHome aria-hidden="true" />
      </a>
      <a
        href="#about"
        onClick={() => handleNavClick('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        aria-label="Go to about section"
        aria-current={activeNav === '#about' ? 'page' : undefined}>
        <AiOutlineUser aria-hidden="true" />
      </a>
      <a
        href="#blog"
        onClick={() => handleNavClick('#blog')}
        className={activeNav === '#experience' ? 'active' : ''}
        aria-label="Go to blog section"
        aria-current={activeNav === '#experience' ? 'page' : undefined}>
        <BiBook aria-hidden="true" />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleNavClick('#portfolio')}
        className={activeNav === '#services' ? 'active' : ''}
        aria-label="Go to portfolio section"
        aria-current={activeNav === '#services' ? 'page' : undefined}>
        <RiServiceLine aria-hidden="true" />
      </a>
      <a
        href="#contact"
        onClick={() => handleNavClick('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        aria-label="Go to contact section"
        aria-current={activeNav === '#contact' ? 'page' : undefined}>
        <BiMessageSquareDetail aria-hidden="true" />
      </a>
    </nav>
  )
}

export { Nav }