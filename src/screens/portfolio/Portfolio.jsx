import React from 'react'
import './portfolio.css'

import T from '../../components/T'

import IMG1 from '../../assets/eth_bg_logo.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/twas.png'

const data = [
  {
    id: 1,
    title: 'Ethereum Gas Tracker <br/> & Notifications',
    image: IMG1,
    description: 'As a result of the calculations, transaction fees on the ETHEREUM network are calculated. The value that matters here is the GWEI. It is cheaper to trade when the GWEI value is low. Thanks to this application, you can track the GWEI value, create notifications whenever you want, and make cheap transactions on the ETHEREUM network.',
    link1_title: 'App Store',
    link1: 'https://apps.apple.com/us/app/eth-gas-tracker-alerts/id6444177446',
    link2: 'https://play.google.com/store/apps/details?id=com.ethereumgastracker',
    alt: 'Ethereum Gas Tracker & Notifications'
  },
  {
    id: 2,
    title: 'Biometric Password Protection',
    image: IMG2,
    description: `Developed so you can securely store and create your passwords`,
    link1_title: 'GitHub',
    link1: 'https://github.com/ismailonur/Biometric-Password-Protection',
    link2: 'https://play.google.com/store/apps/details?id=com.biometricpasswordprotection',
    alt: 'Biometric Password Protection'
  },
  {
    id: 3,
    title: 'TWAS <br/> Think! Write! Access!',
    image: IMG3,
    description: `TWAS is an online note taking application developed by Friday Team. <br/> Since it is online, it provides ease of access to your notes whenever you want, with any mobile device.`,
    link1_title: 'GitHub',
    link1: 'https://github.com/ismailonur/twas',
    link2: 'https://play.google.com/store/apps/details?id=com.friday.twas',
    alt: 'TWAS Think! Write! Access!'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5><T>my_recent_work</T></h5>
      <h2><T>portfolio</T></h2>

      <div className='container portfolio__container'>
        {
          data.map(({
            id,
            image,
            title,
            description = '',
            link1_title,
            link1 = 'https://www.github.com/ismailonur',
            link2 = 'https://play.google.com/store/apps/developer?id=Friday+Team',
            alt
          }, index) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className='portfolio__item-img'>
                  <img src={image} alt={alt} />
                </div>
                <div className='portfolio__item_body'>
                  <div>
                    <h2 dangerouslySetInnerHTML={{ __html: title }} />
                    <h5 dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                  <br />
                  <div className='portfolio__item-cta'>
                    <a href={link1} className='btn' target='_blank'>{link1_title}</a>
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