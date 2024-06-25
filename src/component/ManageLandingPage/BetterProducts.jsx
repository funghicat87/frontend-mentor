import React from 'react'
import { betterProducts } from '../../constants/ManageLandingPage';
import illustrationIntro from '../../assets/ManageLandingPage/illustrationIntro.svg';
import Button from './Button';

const BetterProducts = () => {
  return (
    <div className='px-10 lg:px-[8%] flex flex-col-reverse lg:flex-row items-center text-center lg:text-start mt-3 lg:mt-6 lg:gap-10'>
      {
        betterProducts.map((ele) => (
          <div key={ele.id} className='lg:w-[50%]'>
            <h1 className='font-bold text-4xl lg:text-6xl text-[#242F55] leading-tight lg:leading-[1.3]'>{ele.title}</h1>
            <p className='text-gray-400 mt-5 leading-8 lg:w-[75%]'>{ele.text}</p>
            <Button className="mt-6">Get Started</Button>    
          </div>
      ))}
      <div className='lg:w-[50%]'>
        <img src={illustrationIntro} alt="illustrationIntro" className='w-full'/> 
      </div>
    </div>
  )
}

export default BetterProducts