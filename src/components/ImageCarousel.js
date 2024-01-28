// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageData from '../data/ImageData'; 

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,   
  };

  return (
    <Slider {...settings} className='mt-20'>
      {ImageData.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={`Image ${item.id}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
