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
    <nav>
      <a
        href="#"
        onClick={() => handleNavClick('#')}
        className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleNavClick('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a
        href="#blog"
        onClick={() => handleNavClick('#blog')}
        className={activeNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleNavClick('#portfolio')}
        className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => handleNavClick('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export { Nav }