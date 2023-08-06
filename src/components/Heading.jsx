import React from 'react';
import { BsFillMoonFill, BsMoon } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';

const Heading = () => {
  const {
    bg,
    darkModeActivate,
    textColor,
    element,
    bgTop
  } = useStateContext();

  
  return (
    <div className='flex flex-col w-full  sticky top-0 z-20'>
      <div className={`flex  w-full h-20 justify-between items-center shadow-md sm:px-24 px-4`} style={{background: bgTop}}>
        <h1 style={{color: textColor}} className="font-bold text-sm sm:text-lg">Where in this World?</h1>
        <span 
        style={{color: element}}
        // Toggle White and Dark M0de
        className='flex items-center gap-2 font-600  text-sm sm:text-lg cursor-pointer' onClick={darkModeActivate}>
          {bg ? <BsFillMoonFill /> : <BsMoon />}
          <h3>Dark Mode</h3>
        </span>
      </div>
    </div>
  )
  };

export default Heading;
