import React from 'react';
import RadioImg from '../assets/ContactForm/icon-radio-selected.svg';
import CheckboxImg from '../assets/ContactForm/icon-checkbox-check.svg';
import { useForm } from 'react-hook-form';


function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  
  const Label = ({ children }) => (
    <div className='block text-[var(--Grey900)] text-sm after:content-["*"] after:text-[var(--Green600)] after:ml-1'>{children}</div>
  ); 

  const InputText = ({ name, label}) => (
    <div className='flex-row font-karla font-medium grow mt-6'>
      <Label>{label}</Label>
      <input 
        {...register(name, { required: { value: true, message: "This field is required" } })} 
        id={name} 
        name={name} 
        type="text" 
        className={`cursor-pointer w-full block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] focus:border-[var(--Green600)] focus:outline-none ${errors[name] ? 'border-red-600' : 'border-gray-400'} `} 
      />
      {errors[name] && <p className="text-red-600 text-sm mt-2">{errors[name].message}</p>}
    </div>
  );
  
  const InputEmail = ({ name, label}) =>(
    <div className='font-karla font-medium grow mt-6'>
      <Label>{label}</Label>
      <input         
        {...register(name, { required: { value: true, message: "This field is required" } })} 
        id={name} 
        name={name}
        type="email" 
        className={`cursor-pointer w-full block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] focus:border-[var(--Green600)] focus:outline-none ${errors[name] ? 'border-red-600' : 'border-gray-400'} `} 
      />
      {errors[name] && <p className="text-red-600 text-sm mt-2">{errors[name].message}</p>}
    </div>
  );
  const RadioOptions =({id, name, label}) =>(
    <div className='w-full relative mt-2  h-[50px]'>
      <input
        name={name}
        type="radio"
        className="peer h-4 w-4 absolute top-1/2 -translate-y-1/2 left-5 appearance-none rounded-full border border-gray-300 checked:border-0 "
        id={id}
        {...register(name, { required: "Please select a query type" })}
        />
      <label className={`w-full h-full absolute rounded-lg border border-gray-400 text-base text-[var(--Grey900)] cursor-pointer flex items-center p-3 peer-checked:border-[var(--Green600)] peer-checked:bg-[var(--Green200)] peer-focus:outline-none ${errors[name] ? 'border-red-600' : 'border-gray-400'} `} htmlFor={id}>
        <span className=' absolute top-1/2 -translate-y-1/2 left-12'>{label}</span>
      </label>
      <span className=" absolute text-gray-900 opacity-0 w-4 h-4 peer-checked:opacity-100 top-1/2 -translate-y-1/2 left-5">
        <img src={`${RadioImg}`} alt="Checkbox" />
      </span>
  </div>
  );
  const InputRadio = ({ name, label }) => {
    return (
      <div className='font-karla font-medium grow mt-6'>
        <Label>{label}</Label>
        <div className='flex flex-col sm:flex-row gap-x-5'>
          <RadioOptions id="GeneralEnquiry" name={name} label="General Enquiry"/>
          <RadioOptions id="SupportRequest" name={name} label="Support Request"/> 
        </div>
        {errors[name] && <p className="text-red-600 text-sm mt-2">{errors[name].message}</p>}
      </div>
    );
  };

  const InputTextArea = ({ id, name, label }) =>(
    <div className='flex-row font-karla font-medium grow mt-6'>
      <Label>{label}</Label>
      <textarea 
      id={id}
      name={name} 
      className={`resize-none w-full h-24 block mt-2 rounded-lg px-5 py-3 border border-gray-400 text-base text-[var(--Grey900)] focus:outline-none focus:border-[var(--Green600)] focus:outline-none ${errors[name] ? 'border-red-600' : 'border-gray-400'}`}
      {...register(name, { required: { value: true, message: "This field is required" } })}
      />
      {errors[name] && <p className="text-red-600 text-sm mt-2">{errors[name].message}</p>}
    </div>
  );
  
  const InputCheckbox = ({ id, name, label }) =>(
    <div className='font-karla font-medium'>
      <div className='relative  grow mt-6 text-[var(--Grey900)] text-sm after:content-["*"] after:text-[var(--Green600)] after:ml-1'>
        <input 
          id={id} 
          type="checkbox"
          name={name} 
          className='peer appearance-none absolute rounded-sm border border-gray-300 w-4 h-4  top-1/2 -translate-y-1/2 checked:border-0'
          {...register(name, { required: { value: true, message: "This field is required" } })}     
          />
        <span className=" absolute text-gray-900 opacity-0 w-4 h-4 peer-checked:opacity-100 top-1/2 -translate-y-1/2 ">
          <img src={`${CheckboxImg}`} alt="Checkbox" />
        </span>
        <label htmlFor={id} className='ml-9 '>{label}</label>
      </div>
      {errors[name] && <p className="text-red-600 text-sm mt-2">{errors[name].message}</p>}

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
      <form className='w-[700px] bg-white rounded-2xl p-10' onSubmit={handleSubmit(onSubmit)}>
        
        <div className='font-bold text-3xl text-[var(--Grey900)]'>
          Contact Us
        </div>
        <div className='flex flex-col gap-x-5 sm:flex-row'>
          <InputText name="FirstName" label="First Name" />
          <InputText name="LastName" label="Last Name" register={register} />
        </div>
        <div>
          <InputEmail name="EmailAddress" label="Email Address"/>
        </div>
        <div>
          <InputRadio name="QueryType" label="Query Type"/>
        </div>
        <div>
          <InputTextArea id="Message" name="Message" label="Message" />
        </div>
        <div>
          <InputCheckbox id="Agree"name="Agree" label="I consent to being contacted by the team"></InputCheckbox>
        </div>
        <div>
          <InputSubmit>Submit</InputSubmit>
        </div>
    
      </form>



    </div>
  );
}

export default ContactForm;
