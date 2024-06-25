import React, { useState } from 'react';
import Logo  from '../../assets/ManageLandingPage/logo.svg';
import IconHamburger from '../../assets/ManageLandingPage/iconHamburger.svg';
import IconcClose from '../../assets/ManageLandingPage/iconcClose.svg';
import Button from './Button';
import { header } from '../../constants/ManageLandingPage';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuIconClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className={`sticky top-0 left-0 right-0 z-50  flex flex-col items-center px-10 lg:px-[8%] lg:bg-none`}>
      <div className='w-full flex flex-row justify-between items-center py-10 z-50'>
        <img src={Logo} alt="Logo" className='bg-auto object-contain'/>
        <div className="hidden lg:grid lg:grid-flow-col lg:gap-10 lg:block">
          {
            header.map((ele) =>(
              <a key={ele.id} className='text-[#242F55] hover:text-gray-400 font-bold'>{ele.title}</a>
          ))}
        </div>
        <Button className="hidden lg:block">Get Started</Button>
        <button onClick={handleMenuIconClick} className='lg:hidden'>
         <img src={menuOpen ? IconHamburger : IconcClose} alt={menuOpen ? "IconHamburger" : "IconcClose"} />
        </button>
      </div>
      <div className={`${menuOpen ? 'hidden' : 'flex'} lg:hidden absolute top-28 flex-col bg-White w-11/12 items-center justify-center p-4 rounded-md z-50`}>
        {
          header.map((ele) =>(
            <a key={ele.id} className='text-[#242F55] font-bold hover:text-gray-400 py-3 w-full h-full text-center' href="#ManageLandingPage">{ele.title}</a>
        ))}
      </div>
      <div className={`${menuOpen ? '' : 'lg:hidden absolute w-screen h-screen  bg-gradient-to-r bg-gradient-0 from-black/70 to-black/[0]'}`}></div>
    </header>
  )
}

export default Header