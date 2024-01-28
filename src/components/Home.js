import React from 'react';
import ImageCarousel from './ImageCarousel';
import Products from './Products';
import WithNavbar from './WithNavbar';

const Home = () => {
  return (
    <div>
      <ImageCarousel />
      <Products/>
    </div>
  );
};

export default WithNavbar(Home);
