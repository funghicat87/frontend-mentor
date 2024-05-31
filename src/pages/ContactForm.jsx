import React from 'react';
import CheckboxImg from '../assets/ContactForm/icon-radio-selected.svg';

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

  const InputRadio = ({ children }) => {
    return (
      <div className='font-karla font-medium grow mt-6'>
        <Label>{children}</Label>
        <div className='flex flex-row gap-x-5'>

        <label className="w-full block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] cursor-pointer flex items-center relativep-3 w-full" htmlFor="GeneralEnquiry">
          <input
            name={children}
            type="radio"
            className="peer relative h-5 w-5 appearance-none rounded-full border border-blue-gray-200before:absolute before:top-1/2 before:left-1/2 before:block before:h-4 before:w-4 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500"
            id="GeneralEnquiry"
          />
          <span className="relative text-gray-900 opacity-0 top-0 left-0 peer-checked:opacity-100">
            <img src={`${CheckboxImg}`} alt="Checkbox" />
          </span>
          <span>General Enquiry</span>
        </label>


          <label htmlFor='SupportRequest' className='radio-label w-full block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] cursor-pointer flex items-center relative'>
            <input id='SupportRequest' name={children} type='radio' className='radio-input opacity-0 absolute' />
            <span className='custom-radio before:content-[""] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:border before:border-gray-400 before:rounded-full'></span>
            <span className='ml-8'>Support Request</span>
          </label>
        </div>
      </div>
    );
  };

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
          }

          .radio-input:checked + .custom-radio::before {
            background-image: url('${CheckboxImg}');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 1rem;
            border: 0;
          }
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

    
      </div>



    </div>
  );
}

export default ContactForm;
