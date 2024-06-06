import React from 'react'
import ImgTable from '../assets/NewsletterForm/illustration-sign-up-desktop.svg';
import ImgMobile from '../assets/NewsletterForm/illustration-sign-up-mobile.svg';
import { useForm } from 'react-hook-form';

const NewsletterForm = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='w-full h-screen bg-[var(--CharcoalGrey)] flex items-center justify-center font-roboto text-[var(--DarkSlateGrey)]'>
      <style>
        {`
          :root {
            --DarkSlateGrey: hsl(234, 29%, 20%);
            --CharcoalGrey: hsl(235, 18%, 26%);
            --Grey: hsl(231, 7%, 60%);
          }
          
        `}
      </style>
      <div className='lg:w-[850px] md:w-[700px] bg-white flex md:flex-row sm:flex-col-reverse rounded-3xl p-5 justify-between'>
          <div className='lg:w-[400px] md:w-[330px] m-9 mr-14 my-auto'>
            <h1 className='lg:text-5xl md:text-3xl font-bold'>
              Stay updated!
            </h1>
            <p className='lg:mt-5 md:m-2'>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className='list-none space-y-2 lg:mt-5 md:m-2'>
              <li className='pl-8 bg-[url(/src/assets/NewsletterForm/icon-list.svg)] bg-no-repeat'>Product discovery and building what matters</li>          
              <li className='pl-8 bg-[url(/src/assets/NewsletterForm/icon-list.svg)] bg-no-repeat'>Measuring to ensure updates are a success</li>
              <li className='pl-8 bg-[url(/src/assets/NewsletterForm/icon-list.svg)] bg-no-repeat'>And much more!</li> 
            </ul>
            <form className='lg:mt-8 md:mt-5 flex flex-col' onSubmit={handleSubmit(onSubmit)}>
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
              <input id="submit" name="submit" type="submit" value="Subscribe to monthly newsletter" className='lg:mt-4 md:mt-2 px-5 py-3 rounded-lg border-0 bg-[var(--DarkSlateGrey)] focus:outline-none mt-2 font-medium text-white hover:bg-gradient-to-r from-[#FF5075] to-[#FD6A35] hover:drop-shadow-[0_10px_10px_#FFC8C4]'/>
            </form>
        </div>
        <div>
          <img src={ImgTable} alt="ImgTable" className='hidden sm:block w-full' />
          <img src={ImgMobile} alt="ImgMobile" className='block sm:hidden w-full' />
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm