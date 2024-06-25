import React from 'react';
import { simplify } from '../../constants/ManageLandingPage';
import Button from './Button';
import { BackgroundOrange } from './Background';



const Simplify = () => {
  return (
    <div className='w-full relative px-10 py-20 lg:px-[8%] flex flex-col lg:flex-row items-center justify-around'>
      <BackgroundOrange/>
      {simplify.map((ele) => (
          <h1 key={ele.id} className='lg:w-[800px] text-4xl lg:text-6xl text-white text-center lg:text-left leading-tight lg:leading-[1.3]'>
            {ele.text}
          </h1>
        ))}
      <div className='shrink-0'>
        <Button white className="mt-7 ">Get Started</Button>
      </div>
    </div>
  )
}

export default Simplify