import React from 'react';
import CheckboxImg from '../assets/ContactForm/icon-checkbox-check.svg';

function ContactForm() {
  const Label = ({ children }) => (
    <div className='block text-[var(--Grey900)] text-sm after:content-["*"] after:text-[var(--Green600)] after:ml-1'>{children}</div>
  ); 
  const InputText = ({ children }) =>(
    <div className='flex-row font-karla font-medium grow mt-6'>
      <Label>{children}</Label>
      <input id={children} name={children} type="text" className='w-full block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] focus:outline-none focus:border-[var(--Green600)]'/>
    </div>
  );
  
  const InputEmail = ({ children }) =>(
    <div className='font-karla font-medium grow mt-6'>
      <Label>{children}</Label>
      <input id={children} name={children} type="email" className='w-full block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] focus:outline-none focus:border-[var(--Green600)]'/>
    </div>
  );

  const InputRadio = ({ children }) =>(
    <div className='font-karla font-medium grow mt-6'>
      <Label>{children}</Label>
      <div className='flex flex-row gap-x-5'>
        <label htmlFor='GeneralEnquiry' className='w-full block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] focus:outline-none focus:border-[var(--Green600)]'>
          <input id='GeneralEnquiry' name={children} type="radio" className=''style={{backgroundImage: `url(${CheckboxImg})`}}/>
          General Enquiry
        </label>
        <label htmlFor='SupportRequest' className='w-full block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] focus:outline-none focus:border-[var(--Green600)]'>
          <input id='SupportRequest' name={children} type="radio" className=''/>
          Support Request
        </label>
      </div>
    </div>
  );

  return (
    <div className='bg-[var(--Green200)] w-full h-dvh font-karla flex justify-center items-center'>
      <style>
        {`
          :root {
          --Green200: hsl(148, 38%, 91%);
          --Green600: hsl(169, 82%, 27%);
          --Red: hsl(0, 66%, 54%);
          --White: hsl(0, 0%, 100%);
          --Grey500: hsl(186, 15%, 59%);
          --Grey900: hsl(187, 24%, 22%);
          --CheckBox: "url('../assets/ContactForm/icon-checkbox-check.svg')";
          };
        `}
      </style>
      <div className='w-[700px] bg-white rounded-2xl p-10'>
        <div className='font-bold text-3xl text-[var(--Grey900)]'>
          Contact Us
        </div>
        <div className='flex flex-row gap-x-5'>
          <InputText>First Name</InputText>
          <InputText>Last Name</InputText>
        </div>
        <div>
          <InputEmail>Email Address</InputEmail>
        </div>
        <div>
          <InputRadio>Query Type</InputRadio>
        </div>
        <div  >
          
        </div>
      </div>
    </div>
  )
}

export default ContactForm