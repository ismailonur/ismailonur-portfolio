import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/eth_bg_logo.png'
import IMG2 from '../../assets/portfolio2.png'

const data = [
  {
    id: 1,
    title: 'Ethereum Gas Tracker <br/> & Notifications',
    image: IMG1,
    description: 'As a result of the calculations, transaction fees on the ETHEREUM network are calculated. The value that matters here is the GWEI. It is cheaper to trade when the GWEI value is low. Thanks to this application, you can track the GWEI value, create notifications whenever you want, and make cheap transactions on the ETHEREUM network.',
    link1: 'https://www.github.com/ismailonur',
    link2: 'https://play.google.com/store/apps/details?id=com.ethereumgastracker'
  },
  {
    id: 1,
    title: 'Biometric Password Protection',
    image: IMG2,
    description: `Developed so you can securely store and create your passwords`,
    link1: 'https://www.github.com/ismailonur',
    link2: 'https://play.google.com/store/apps/details?id=com.biometricpasswordprotection'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, description = '', link1, link2 = 'https://www.google.com' }, index) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className='portfolio__item-img'>
                  <img src={image} alt='' />
                </div>
                <div className='portfolio__item_body'>
                  <div>
                    <h2 dangerouslySetInnerHTML={{ __html: title }} />
                    <h5>{description}</h5>
                  </div>
                  <br />
                  <div className='portfolio__item-cta'>
                    <a href={link1} className='btn' target='_blank'>GitHub</a>
                    <a href={link2} className='btn btn-primary' target='_blank'>Play Store</a>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export { Portfolio }