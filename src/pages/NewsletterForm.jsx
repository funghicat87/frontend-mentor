import React from 'react'
import ImgTable from '../assets/NewsletterForm/illustration-sign-up-desktop.svg';
import ImgMobile from '../assets/NewsletterForm/illustration-sign-up-mobile.svg';
import ImgSuccess from '../assets/NewsletterForm/icon-success.svg';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

const NewsletterForm = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ submitted, setSubmitted ] = useState(false); 
  
  const onSubmit = data => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className='w-full h-screen bg-[var(--CharcoalGrey)] flex md:items-center md:justify-center font-roboto text-[var(--DarkSlateGrey)]'>
      <style>
        {`
          :root {
            --DarkSlateGrey: hsl(234, 29%, 20%);
            --CharcoalGrey: hsl(235, 18%, 26%);
            --Grey: hsl(231, 7%, 60%);
          }
          
        `}
      </style>
      {!submitted ? (
        <div className='lg:w-[850px] md:w-[700px] w-full bg-white flex flex-col-reverse md:flex-row md:rounded-3xl md:p-5 justify-end md:justify-between'>
          <div className='flex flex-col lg:w-[400px] md:w-[330px] md:m-9 md:mr-14 md:my-auto p-6 md:p-0'>
            <h1 className='text-5xl md:max-lg:text-3xl font-bold mt-5 md:mt-0'>
              Stay updated!
            </h1>
            <p className='mt-5 md:max-lg:m-2'>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className='list-none space-y-2 mt-5 md:max-lg:m-2'>
              <li className='pl-8 bg-[url(/src/assets/NewsletterForm/icon-list.svg)] bg-no-repeat'>Product discovery and building what matters</li>          
              <li className='pl-8 bg-[url(/src/assets/NewsletterForm/icon-list.svg)] bg-no-repeat'>Measuring to ensure updates are a success</li>
              <li className='pl-8 bg-[url(/src/assets/NewsletterForm/icon-list.svg)] bg-no-repeat'>And much more!</li> 
            </ul>
            <form className='mt-8 md:max-lg:mt-5 flex flex-col' onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="Email" className='text-xs font-bold'>
              Email address
              </label>
              <input 
                id="Email" 
                name="Email" 
                type="email" 
                placeholder='email@company.com' 
                className='px-5 py-3 rounded-lg border border-gray-400 focus:outline-none mt-2 text-[var(--DarkSlateGrey)] focus:border-[var(--DarkSlateGrey)]'
                {...register("Email", { 
                  required: { value: true, message: "The field is left empty" },
                  pattern: { 
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                    message: "The email address is not formatted correctly"
                  }
                })}
                />
                 {errors.Email && <span className='text-red-500 text-xs mt-1'>{errors.Email.message}</span>}
              <input id="submit" name="submit" type="submit" value="Subscribe to monthly newsletter" className='mt-4 md:max-lg:mt-2 px-5 py-3 rounded-lg border-0 bg-[var(--DarkSlateGrey)] focus:outline-none mt-2 font-medium text-white hover:bg-gradient-to-r from-[#FF5075] to-[#FD6A35] hover:drop-shadow-[0_10px_10px_#FFC8C4]'/>
            </form>
          </div>
        <div>
          <img src={ImgTable} alt="ImgTable" className='hidden md:block w-full' />
          <img src={ImgMobile} alt="ImgMobile" className='block md:hidden w-full' />
        </div>
      </div>):(
          <div className='flex flex-col w-full lg:w-[450px] md:w-[400px] md:m-9 md:mr-14 md:my-auto p-6 md:p-12 md:rounded-3xl bg-white justify-around'>
            <div>
              <img src={ImgSuccess} alt="ImgSuccess" className='w-16'/>
              <h1 className='text-5xl md:max-lg:text-3xl font-bold mt-5'>
                Thanks for subscribing!
              </h1>
              <p className='mt-5'>
                A confirmation email has been sent to <span className='font-medium'>ash@loremcompany.com.</span> 
                Please open it and click the button inside to confirm your subscription.
              </p>
            </div>
            <button className='mt-9 px-5 py-3 rounded-lg border-0 bg-[var(--DarkSlateGrey)] focus:outline-none  font-medium text-white hover:bg-gradient-to-r from-[#FF5075] to-[#FD6A35] hover:drop-shadow-[0_10px_10px_#FFC8C4]'>
              Dismiss message
            </button>
          </div>
      )}
    </div>
  )
}

export default NewsletterForm