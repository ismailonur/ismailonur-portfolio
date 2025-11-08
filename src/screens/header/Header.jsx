import React from 'react'
import './header.css'

import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import T from '../../components/T';
import { useLanguage } from '../../components/languageComp';

import { Link } from "react-router-dom";

const Header = () => {
  const { toggleLang, lang } = useLanguage();

  return (
    <header>
      <div className='container header__container'>
        <h4><T>hello</T> <T>im</T></h4>
        <h1>İsmail Onur</h1>
        <h4><T>software_engineer</T></h4>
        <h5><T>mobile</T> (React-Native) <T>developer</T></h5>
        <h5>React.js <T>developer</T></h5>

        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='İsmail Onur, Software Engineer' />
        </div>

        <div className='header_right'>
          <Link 
            to={lang === "EN" ? "/tr" : "/en"} 
            className='language'
            aria-label={`Switch language to ${lang === "EN" ? "Turkish" : "English"}`}
            >
            {lang === "EN" ? "TR" : "EN"}
          </Link>
          <a 
            href="#contact" 
            className='scroll_down'
            aria-label="Scroll down to next section">
            <T>scroll_down</T>
          </a>
        </div>
      </div>
    </header>
  )
}

export { Header }