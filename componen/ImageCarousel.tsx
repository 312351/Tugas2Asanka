// components/ImageCarousel.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'

export default function ImageCarousel() {
  const images = [
    'https://static.airasia.com/cosmos/images/herobanner/id/2025/Hero%20Banner__SEA%20YOU%20SOON%20THAILAND_Desktop_ID.jpg',
    'https://static.airasia.com/cosmos/images/herobanner/id/2025/Hero%20Banner__SEA%20YOU%20SOON%20THAILAND_Desktop_ID.jpg',
    'https://static.airasia.com/cosmos/images/herobanner/id/2025/Hero%20Banner__SEA%20YOU%20SOON%20THAILAND_Desktop_ID.jpg',
  ]

  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
