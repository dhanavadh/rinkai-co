"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <>
        <Swiper    
        cssMode={true}    
        // navigation={true}
        pagination={{
            clickable: true,
          }}    
        mousewheel={true}
        keyboard={true}    
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {/* Parent Please Clone From This */}
        
        
        
        <SwiperSlide>        
          <div className='slider-core'>
              <Image alt='amigo' width={1920} height={1080} src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/promo-june-1.svg' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
              <Image alt='amigo' width={1920} height={1080} src='https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/Ads/promo-june-1.svg' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
              <div className='text-area-padding'>
                  <p className='title-section link'>
                    <a className='bg-neutral-50 text-neutral-800 px-2 py-1'>Fastfill – Web Service</a>
                  </p>
                  <p className='subtitle-section'><a className='bg-neutral-800 px-2 py-1'>Fastfill – พิมพ์เอกสารราชการเป็นภาษาอังกฤษ ง่าย สะดวก รวดเร็ว</a></p>
              </div>
          </div>        
        </SwiperSlide> 

        <SwiperSlide>        
          <div className='slider-core'>
              <Image alt='amigo' width={1920} height={1080} src='/images/slider/fastfill_slider.png' className='hidden lg:flex absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
              <Image alt='amigo' width={1920} height={1080} src='/images/slider/fastfill_slider.png' className='flex lg:hidden absolute z-[-1] w-full h-full object-cover brightness-50'></Image>
              <div className='text-area-padding'>
                  <p className='title-section link'>
                    <a className='bg-neutral-50 text-neutral-800 px-2 py-1'>Fastfill – Web Service</a>
                  </p>
                  <p className='subtitle-section'><a className='bg-neutral-800 px-2 py-1'>Fastfill – พิมพ์เอกสารราชการเป็นภาษาอังกฤษ ง่าย สะดวก รวดเร็ว</a></p>
              </div>
          </div>        
        </SwiperSlide>        
      </Swiper>
    </>
  )
}

export default Slider