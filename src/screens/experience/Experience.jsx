import React from 'react'
import './experience.css'

import { BsPatchCheckFill } from 'react-icons/bs'

import T from '../../components/T'

const Experience = () => {
  return (
    <section id='experience'>
      <h5><T>what_skills_i_have</T></h5>
      <h2><T>my_experience</T></h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3><T>programming_languages</T>, <T>frameworks</T></h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React-Native</h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4></h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article> */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4></h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article> */}
          </div>
        </div>

        <div className='experience__backend'>
          <h3><T>development_tools</T></h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>VS Code</h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Xcode</h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Postman</h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Adobe XD</h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Adobe Photoshop</h4>
                <small className='test-light'><T>experience</T></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Experience }