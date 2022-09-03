import React, { useEffect } from 'react'
import './about.css'

import ME from '../../assets/me-about.webp'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import T from '../../components/T';

const About = () => {
  const [experienceYears, setExperienceYears] = React.useState(0)

  useEffect(() => {
    const temp = new Date().getFullYear();
    setExperienceYears(temp - 2019)
  }, [])

  return (
    <section id='about'>
      <h5><T>get_to_know</T></h5>
      <h2><T>about_me</T></h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='İsmail Onur, İsmail Onur Profil Resmi' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5><T>experience</T></h5>
              <small>{experienceYears}+ <T>years_working</T></small>
            </article>

            {/* 
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>temp</h5>
              <small>temp</small>
            </article> 
            */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5><T>projects</T></h5>
              <small>15+ <T>completed</T></small>
            </article>
          </div>
          <p>
            <T>about_me_text_1</T>
            <T>about_me_text_2</T>
            <T>about_me_text_3</T>
            <T>about_me_text_4</T>
            <T>about_me_text_5</T>
          </p>
          <a href='#contact' className='btn btn-primary'><T>lets_talk</T></a>
        </div>
      </div>
    </section>
  )
}

export { About }