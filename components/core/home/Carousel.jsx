'use client'
import { useEffect, useRef, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Carousel.module.css'
import CarouselItem from './CarouselItem'
//Import swipper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { carouselItems } from '@/constants'
import RequestTalentForm from './RequestTalentForm'

function CarouselComp() {
  return (
    <div className={`${styles.container}`} id='carousel'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#FFBA08',
          '--swiper-navigation-bullet-inactive-color': '#999999',
          '--swiper-navigation-bullet-inactive-opacity': '1',
          '--swiper-navigation-bullet-size': '2px',
          '--swiper-navigation-bullet-height': '2px',
          '--swiper-navigation-bullet-inactive-background-color': '#fff',
          '--swiper-navigation-bullet-horizontal-gap': '1px',

          '--swiper-pagination-color': '#FFBA08',
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '10px',
          '--swiper-pagination-bullet-height': '10px',
          '--swiper-pagination-bullet-inactive-background-color': '#fff',
          '--swiper-pagination-bullet-horizontal-gap': '4px',
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // breakpointsBase="window"
        spaceBetween={50}
        slidesPerView={2}
        lazyPreloadPrevNext={true}
        keyboard={{
          enabled: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          990: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          412: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 45,
          },
          280: {
            slidesPerView: 1,
            spaceBetween: 45,
          },
        }}
        pagination={{ clickable: true }}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation, EffectCoverflow, Pagination, Scrollbar]}
        className={`mySwiper ${styles.swiper_container}`}
      >
        {carouselItems.map((item) => {
          return (
            <SwiperSlide key={item.id} className={`${styles.swiper_slide}`}>
              {({ isActive }) => (
                <CarouselItem
                  item={item}
                  key={item.title}
                  isActive={isActive}
                />
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
      <RequestTalentForm />
    </div>
  )
}

export default CarouselComp
