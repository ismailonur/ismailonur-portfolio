import React from 'react'
import './header.css'

import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

import {
  LanguageProvider,
  useLanguage
} from '../../components/languageComp/index.js';

const Header = () => {
  const [language, setLanguage] = React.useState("EN");
  const { toggleLang, translate, lang } = useLanguage();

  return (
    <header>
      <div className='container header__container'>
        <h4>{translate("hello")} I'm</h4>
        <h1>İsmail Onur</h1>
        <h4>Software Engineer</h4>
        <h5>Mobile (React-Native) Developer</h5>
        <h5>React.js Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <div className='header_right'>
          <a className='language'
            onClick={() => toggleLang()}>
            {lang === "EN" ? "TR" : "EN"}
          </a>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export { Header }