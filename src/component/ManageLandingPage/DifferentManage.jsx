import React from 'react';
import { differentManage } from '../../constants/ManageLandingPage';

const DifferentManage = () => {
  return (
    <div className='px-10 lg:px-[8%] flex flex-col items-center justify-center lg:flex-row  text-center lg:text-start lg:mt-6 lg:gap-10'>
      {differentManage.map((ele) => (
        <div key={ele.id} className='lg:w-[50%]'>
          <h1 className='font-bold text-4xl lg:text-6xl text-[#242F55] leading-tight lg:leading-[1.3]'>{ele.title}</h1>
          <p className='text-gray-400 mt-5 leading-8 lg:w-[60%]'>{ele.text}</p>
        </div>
      ))}
      {differentManage.map((ele) => (
        <div key={ele.id} className='lg:w-[50%] '>
           {ele.content.map((ele) => (
            <div key={ele.id} className='mt-14'>
              <div className='flex items-center '>
                <span className='rounded-full py-3 px-6 bg-[#f25f3a] text-white'>{ele.id}</span>
                <h4 className='w-full pl-4 text-left relative font-bold text-[#242F55] leading-tight lg:leading-[1.3] before:block before:absolute before:lg:hidden before:-inset-y-2 before:-right-10 before:-left-10 before:-z-10 before:bg-[#FFF0EB] '>{ele.title}</h4>
              </div>
              <p className='text-gray-400 mt-4 leading-8 text-left'>{ele.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DifferentManage;
