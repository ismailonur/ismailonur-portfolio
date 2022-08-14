import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'İsmail Onur',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, cumque modi voluptates exercitationem eos illum. Sit quidem eum sapiente quisquam.'
  },
  {
    avatar: AVTR2,
    name: 'İsmail Onur',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, cumque modi voluptates exercitationem eos illum. Sit quidem eum sapiente quisquam.'
  },
  {
    avatar: AVTR3,
    name: 'İsmail Onur',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, cumque modi voluptates exercitationem eos illum. Sit quidem eum sapiente quisquam.'
  },
  {
    avatar: AVTR4,
    name: 'İsmail Onur',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, cumque modi voluptates exercitationem eos illum. Sit quidem eum sapiente quisquam.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export { Testimonials }