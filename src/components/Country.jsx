import React from 'react'
import { useStateContext } from '../context/StateContext'

const  Country = ({country:{name,population,region,capital,flag}}) => {

  const {textColor,bgTop,element} = useStateContext()
  
  return (
   <> 

                <div className='flex flex-col w-64 h-96 shadow rounded'  style={{background: bgTop}}>
                    <div className='w-full h-1/2 cursor-pointer overflow-hidden rounded-t  relative'>
                            <img
                            className='w-full h-full object-cover'
                            src={flag} alt="country flag" />
                    </div>
                    <div className='flex flex-col gap-1 pl-4 pt-4 pb-10'>
                        <h1 className={` font-black text-10`} style={{color: textColor}}>{name}</h1>
                        <div className='gap-10 font-normal text-10' style={{color: element}}>
                           <span className='font-medium text-10'>Population: </span>
                            {population}
                         </div>
                        <h3 className='gap-2  font-normal text-10'  style={{color: element}}>
                           <span  className='font-medium'>Region: </span> 
                           {region}</h3>
                        <h3 className='font-normal text-10 gap-2'  style={{color: element}}> 
                        <span  className='font-medium'>Capital: </span> 
                        {capital}</h3>
                    </div>
                </div>
          
  </>
  )
  
}

export default Country