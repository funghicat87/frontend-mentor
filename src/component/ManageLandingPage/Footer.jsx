import React from 'react'
import Button from './Button'
import { footer, community } from '../../constants/ManageLandingPage';
import LogoWhite  from '../../assets/ManageLandingPage/logoWhite.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ submitted, setSubmitted ] = useState(false); 
  
  const onSubmit = data => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <footer className='w-full bg-[#1E1E26] text-white px-10 lg:px-[8%] py-16 flex flex-col lg:flex-row-reverse gap-14 items-center lg:items-stretch justify-between'>
      <div className='flex flex-col items-end justify-between' >
        <form className='lg:flex lg:flex-col' onSubmit={handleSubmit(onSubmit)}>
          <div className='lg:flex lg:flex-row'>
            <input type="search" className={`[&::-webkit-search-cancel-button]:hidden focus:outline-none text-[#1E1E26] rounded-full py-3 px-10 mr-4 ${errors.Email ? "border border-red-500 placeholder:text-red-500 text-red-500" :""}`} placeholder='Updates in your inbox…'
            {...register("Email", { 
              required: { value: true, message: "The field is left empty" },
              pattern: { 
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                message: "Please insert a vaild email"
              }
            })}
            />
            <Button className="grow-0 shrink-0">Go</Button>
          </div>            
            {errors.Email && <span className='text-red-500 px-10 text-sm mt-3'>{errors.Email.message}</span>}
          
        </form>
        <div className='text-gray-400 hidden lg:flex'>
          Copyright 2020. All Rights Reserved
        </div>
      </div>
      <div className='grid grid-rows-4 grid-flow-col justify-center gap-y-6 gap-x-36 ' >
        {
          footer.map((ele) => (
            <div key={ele.id} className='hover:text-[#f25f3a]'>{ele.title}</div>
        ))}
      </div>
      <div className='flex flex-col lg:flex-col-reverse items-center lg:justify-between gap-12'>
        <div className='flex gap-14 lg:gap-4'>
          {community.map((ele) => {
            const SvgComponent = ele.image;
            return (
              <div key={ele.id} className='w-7 h-7'>
                <SvgComponent className="w-full h-full fill-white hover:fill-[#f25f3a]" pathClassName=""/>
              </div>
            );
          })}      
        </div>
        <div className='lg:w-full'>
          <img src={LogoWhite} alt="LogoWhite" className='lg:w-full'/>
        </div>
      </div>
      <div className='text-gray-400 lg:hidden'>
        Copyright 2020. All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer