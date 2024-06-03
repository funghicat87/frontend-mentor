import React from 'react';
import RadioImg from '../assets/ContactForm/icon-radio-selected.svg';
import CheckboxImg from '../assets/ContactForm/icon-checkbox-check.svg';

function ContactForm() {
  const Label = ({ children }) => (
    <div className='block text-[var(--Grey900)] text-sm after:content-["*"] after:text-[var(--Green600)] after:ml-1'>{children}</div>
  ); 

  const InputText = ({ children }) =>(
    <div className='flex-row font-karla font-medium grow mt-6'>
      <Label>{children}</Label>
      <input required id={children} name={children} type="text" className='cursor-pointer w-full block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] focus:outline-none focus:border-[var(--Green600)]'/>
    </div>
  );
  
  const InputEmail = ({ children }) =>(
    <div className='font-karla font-medium grow mt-6'>
      <Label>{children}</Label>
      <input required id={children} name={children} type="email" className='cursor-pointer w-full block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] focus:outline-none focus:border-[var(--Green600)]'/>
    </div>
  );

  const InputRadio = ({ children }) => {
    return (
      <div className='font-karla font-medium grow mt-6'>
        <Label>{children}</Label>
        <div className='flex flex-col sm:flex-row gap-x-5'>
        <div className='w-full relative mt-2  h-[50px]'>
          <input
            name={children}
            type="radio"
            className="peer h-4 w-4 absolute top-1/2 -translate-y-1/2 left-5 appearance-none rounded-full border border-gray-300 checked:border-0 "
            id="GeneralEnquiry"
            />
          <label className="w-full h-full absolute rounded-lg border border-gray-400 text-base text-[var(--Grey900)] cursor-pointer flex items-center p-3 peer-checked:border-[var(--Green600)] peer-checked:bg-[var(--Green200)]" htmlFor="GeneralEnquiry"></label>
          <span className=" absolute text-gray-900 opacity-0 w-4 h-4 peer-checked:opacity-100 top-1/2 -translate-y-1/2 left-5">
            <img src={`${RadioImg}`} alt="Checkbox" />
          </span>
          <span className=' absolute top-1/2 -translate-y-1/2 left-12'>General Enquiry</span>
        </div>
        <div className='w-full relative mt-2 h-[50px]'>
          <input
            name={children}
            type="radio"
            className="peer h-4 w-4 absolute top-1/2 -translate-y-1/2 left-5 appearance-none rounded-full border border-gray-300 checked:border-0 "
            id="SupportRequest"
            />
          <label className="w-full h-full absolute rounded-lg border border-gray-400 text-base text-[var(--Grey900)] cursor-pointer flex items-center p-3 peer-checked:border-[var(--Green600)] peer-checked:bg-[var(--Green200)]" htmlFor="SupportRequest"></label>
          <span className=" absolute text-gray-900 opacity-0 w-4 h-4 peer-checked:opacity-100 top-1/2 -translate-y-1/2 left-5">
            <img src={`${RadioImg}`} alt="Checkbox" />
          </span>
          <span className=' absolute top-1/2 -translate-y-1/2 left-12'>Support Request</span>
        </div>  
        </div>
      </div>
    );
  };

  const InputTextArea = ({ children }) =>(
    <div className='flex-row font-karla font-medium grow mt-6'>
      <Label>{children}</Label>
      <textarea required id={children} className='resize-none w-full h-24 block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] focus:outline-none focus:border-[var(--Green600)]'/>
    </div>
  );
  
  const InputCheckbox = ({ children }) =>(
    <div className='relative font-karla font-medium grow mt-6 text-[var(--Grey900)] text-sm after:content-["*"] after:text-[var(--Green600)] after:ml-1'>
      <input id={children}  type="checkbox" className='peer appearance-none absolute rounded-sm border border-gray-300 w-4 h-4  top-1/2 -translate-y-1/2 checked:border-0'/>
      <span className=" absolute text-gray-900 opacity-0 w-4 h-4 peer-checked:opacity-100 top-1/2 -translate-y-1/2 ">
        <img src={`${CheckboxImg}`} alt="Checkbox" />
      </span>
      <label htmlFor={children} className='ml-9 '>I consent to being contacted by the team</label>
    </div>
  );

  const InputSubmit = ({ children }) =>(
    <div className='font-karla font-medium grow mt-6'>
      <input type="submit" value={ children } className='w-full block rounded-lg bg-[var(--Green600)] text-white h-[50px] active:bg-[var(--Grey900)] cursor-pointer'/>
    </div>
  );

  return (
    <div className='bg-[var(--Green200)] w-full h-dvh font-karla flex justify-center items-center px-5'>
      <style>
        {`
          :root {
          --Green200: hsl(148, 38%, 91%);
          --Green600: hsl(169, 82%, 27%);
          --Red: hsl(0, 66%, 54%);
          --White: hsl(0, 0%, 100%);
          --Grey500: hsl(186, 15%, 59%);
          --Grey900: hsl(187, 24%, 22%);
          }
        `}
      </style>
      <form className='w-[700px] bg-white rounded-2xl p-10'>
        <div className='font-bold text-3xl text-[var(--Grey900)]'>
          Contact Us
        </div>
        <div className='flex flex-col gap-x-5 sm:flex-row'>
          <InputText>First Name</InputText>
          <InputText>Last Name</InputText>
        </div>
        <div>
          <InputEmail>Email Address</InputEmail>
        </div>
        <div>
          <InputRadio>Query Type</InputRadio>
        </div>
        <div>
          <InputTextArea>Message</InputTextArea>
        </div>
        <div>
          <InputCheckbox>Agree</InputCheckbox>
        </div>
        <div>
          <InputSubmit>Submit</InputSubmit>
        </div>
    
      </form>



    </div>
  );
}

export default ContactForm;
