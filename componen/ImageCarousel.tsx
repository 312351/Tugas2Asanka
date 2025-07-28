// components/ImageCarousel.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'

export default function ImageCarousel() {
  const images = [
    'https://static.airasia.com/cosmos/images/herobanner/id/2025/Hero%20Banner__SEA%20YOU%20SOON%20THAILAND_Mobile_ID.jpg',
    'https://static.airasia.com/cosmos/images/herobanner/id/2025/HB-ID-Mobile.48hrs.jpg',
    'https://storage.googleapis.com/static.airasia.com/cosmos/images/herobanner/id/2025%20Hotel/2407/IDID_HOTELS-ALWAYS-ON-CAMPAIGN_PHASE2_IDR270K_SE-Hero-Banner-Mob.jpg',
    'https://storage.googleapis.com/static.airasia.com/cosmos/images/herobanner/id/2025%20SNAP/1007/IDID_SNAP%20ASEAN_Adaptations_HB%20Web.jpg',
    'https://static.airasia.com/cosmos/images/herobanner/id/2025/1607/CCR-6803%5BIDID%5D%5BSMALL%5D%5BFLYBEYOND%5D%5BJULY_ASEAN%5D-Hero-Banner-Mobile.jpg'
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
