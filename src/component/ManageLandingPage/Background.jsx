import React from 'react'
import BackgrounImg from '../../assets/ManageLandingPage/bgTabletPattern.svg';
import BackgroundOrangeDesktop from '../../assets/ManageLandingPage/bg-simplify-section-desktop.svg';
import BackgroundOrangeMobile from '../../assets/ManageLandingPage/bg-simplify-section-mobile.svg';

const Background = () => {
  return (
    <div className='absolute object-none w-full h-full flex flex-col object-right-top overflow-hidden items-end -z-10'>
        <img src={BackgrounImg} alt="BackgrounImg" className='relative top-[-100px] right-[-100px] lg:w-[50%] lg:top-[-200px] lg:right-[-100px]'/>
        <img src={BackgrounImg} alt="BackgrounImg" className='relative right-[-250px] lg:self-start lg:w-[650px] lg:left-[-400px] lg:top-[600px]'/>
    </div>
  )
};

const BackgroundOrange = () => {
  return (
    <div className='absolute w-full h-full -z-10 bg-[#f25f3a] overflow-hidden'>
      <img src={BackgroundOrangeDesktop} alt="BackgroundImg" className='w-full h-full object-cover object-[-300px_0px] lg:object-[250px_0px]' />
    </div>

  )
};


export { Background, BackgroundOrange };