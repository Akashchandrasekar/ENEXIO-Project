// Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import './Carousel.css'; // Custom styles

const images = [
  'https://via.placeholder.com/300?text=Image+1',
  'https://via.placeholder.com/300?text=Image+2',
  'https://via.placeholder.com/300?text=Image+3',
  'https://via.placeholder.com/300?text=Image+4',
  'https://via.placeholder.com/300?text=Image+5',
  'https://via.placeholder.com/300?text=Image+6',
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        loop={true}
        navigation={true}
        onSlideChange={(swiper) => {
          document.querySelector('.progress-bar').style.width = `${
            ((swiper.realIndex + 1) / images.length) * 100
          }%`;
        }}
        breakpoints={{
          // Adjust the number of slides based on the screen size
          640: {
            slidesPerView: 1, // For small screens, show 1 slide
          },
          768: {
            slidesPerView: 2, // For medium screens, show 2 slides
          },
          1024: {
            slidesPerView: 3, // For larger screens, show 3 slides
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default Carousel;
