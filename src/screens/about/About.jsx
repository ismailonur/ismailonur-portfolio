import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useEffect } from 'react'

const About = () => {
  const [experienceYears, setExperienceYears] = React.useState(0)

  useEffect(() => {
    const temp = new Date().getFullYear();
    setExperienceYears(temp - 2019)
  }, [])

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>{experienceYears}+ Years Working</small>
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
              <h5>Projects</h5>
              <small>15+ Complated</small>
            </article>
          </div>
          <p>
            I am a software engineer who is passionate about building mobile and web applications.
            I have a strong background in mobile development and have worked on multiple projects.
            I have been developing software in the field of React-Native for {experienceYears} years.
            I also do web development using react.js.
            I worked as a Unity game developer for 6 months.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}


export { About }