import React, { useState, useEffect } from 'react';
import { theySaid } from '../../constants/ManageLandingPage';
import Button from './Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TheySaid = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化设置

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: isLargeScreen ? "center slider variable-width" : "",
    centerMode: isLargeScreen,
    variableWidth: isLargeScreen,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div>
        <ul className='lg:hidden'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='w-full h-full rounded-full border-[1.5px] border-[#f25f3a] '>
      </div>
    )
  };

  return (
    <div className="text-center px-10 lg:px-0 ">
      <style>
        {`
          .slick-dots {
            position: relative;
            margin-top: 30px; 
            bottom: 0;               
          }
          .slick-dots li {
            width: 0.60rem;
            height: 0.60rem;
            margin: 0.15rem;
          }
          .slick-dots .slick-active > div {
            background-color: #f25f3a; 
          }
        `}
      </style>

      <h1 className='font-bold text-4xl lg:text-6xl text-[#242F55] leading-tight lg:leading-[1.3] px-10 lg:px-[8%]'>What they’ve said</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {theySaid.map((ele, index) => (
            <div key={ele.id} className="mt-28 relative lg:p-5" style={isLargeScreen ? { width: 800 } : {}}>
              <img src={ele.image} alt={ele.name} className="w-20 h-20 rounded-full -top-10 right-1/2 left-1/2 -translate-x-1/2 absolute" />
              <div className='bg-[#FAFAFA] p-7 pt-12 h-50'>
                <h3 className="text-lg font-bold mt-4 font-bold text-[#242F55]">{ele.name}</h3>
                <p className="text-gray-400 mt-4">{ele.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Button className="mt-8 lg:mb-24">Get Started</Button>
    </div>
  );
};

export default TheySaid;
