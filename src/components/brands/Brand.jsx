import React from 'react';
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import brand3 from '../../assets/brand3.png';
import brand4  from '../../assets/brand4.png';
import brand5 from '../../assets/brand5.png';
import brand6 from '../../assets/brand6.png';

const Brand = () => {
  return (
    <div className="brand-container pb-20 bg-[#111111] py-10">
      {/* Brands Section */}
      <h1 className="text-center text-white text-2xl font-semibold mb-8 mt-10 "data-aos='zoom-in' >Supported by Amazing Companies      </h1>
      <div className="brand-container1 flex flex-wrap justify-center gap-10" data-aos='zoom-in'>
        {/* Brand Logos */}
        <img src={brand1} alt="Brand 1" className="w-[150px] h-auto object-contain brand-logo" />
        <img src={brand2} alt="Brand 2" className="w-[150px] h-auto object-contain brand-logo" />
        <img src={brand3} alt="Brand 3" className="w-[150px] h-auto object-contain brand-logo" />
        <img src={brand4} alt="Brand 4" className="w-[150px] h-auto object-contain brand-logo" />
        <img src={brand5} alt="Brand 5" className="w-[150px] h-auto object-contain grayscale hidden md:block " />
      </div>
      <div className="brand-container1 flex flex-wrap justify-center gap-10 mt-10 md:mt-17" data-aos='zoom-in'>
        {/* Brand Logos */}
        <img src={brand1} alt="Brand 1" className="w-[150px] h-auto object-contain brand-logo" />
        <img src={brand2} alt="Brand 2" className="w-[150px] h-auto object-contain brand-logo" />
        <img src={brand3} alt="Brand 3" className="w-[150px] h-auto object-contain brand-logo" />
        <img src={brand4} alt="Brand 4" className="w-[150px] h-auto object-contain brand-logo" />
        <img src={brand5} alt="Brand 5" className="w-[150px] h-auto object-contain hidden md:block" />
      </div>
    </div>
  );
};
export default Brand