import React from 'react';
import { useStateContext } from '../context/StateContext';
import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'
import { useParams } from 'react-router-dom';

const CountryPage = () => {
  const param = useParams()
  const {
    finalCountries,
      bgTop,
    textColor
  } = useStateContext();
  
   const country = finalCountries.find((country) => country.name === param.countryName);
   
  if (!country) {
    // You can render a loading state or any appropriate fallback content here
    return <div>Loading...</div>;
  } 
  const styles = {
    color: textColor
  }
  
    return (
      <div className='flex xs:flex-wrap gap-20 w-full items-start sm:items-center p-6 sm:p-20 justify-between'>
      
        {/* Render the country flag */}

        <div className='flex w-94 h-[400px] flex-col sm:items-start cursor-pointer gap-10 overflow-hidden rounded-t'> 
            
              <Link  className='flex justify-center  items-center w-10 gap-2 px-14 py-2 rounded shadow-md' 
             style={{ background: bgTop, color: textColor }}

               to={"/"}>
                <BsArrowLeft />
                  <h3 className='text-sm sm:text-lg '>Back</h3>
              </Link>
          
          <img className=' w-full h-full object-cover' src={ country.flag && country.flag} alt="country flag" />
        </div>

        <div className='flex flex-col w-full sm:w-[50%] items-start justify-between gap-14'>
        <div className='flex flex-col sm:flex-row w-full justify-between'>
            {/* Country information */}
            <span className='flex flex-col gap-2'>
              <h1 className='text-black font-black text-2xl mb-6' style={styles}>{country.name && country.name}</h1>
              <span className='text-gray-800 gap-10 font-thin text-md' style={styles}>
                <span className='font-bold text-md'>Native Name: </span>
                {country.nativeName && country.nativeName}
              </span>
              <span className='text-gray-800 gap-10 font-thin text-md' style={styles}>
                <span className='font-bold text-md'>Population: </span>
                { country.population && country.population}
              </span>
              <span className='text-gray-800 gap-10 font-thin text-md' style={styles}>
                <span className='font-bold text-md'>Region: </span>
                {country.region && country.region}
              </span>
              <span className='text-gray-800 gap-2 font-thin text-md' style={styles}>
                <span className='font-bold text-md'>Sub-Region: </span>
                {country.region && country.subregion}
              </span>
              <span className='text-gray-800 font-thin text-md gap-2' style={styles}>
                <span className='font-bold text-md'>Capital: </span>
                {country.capital && country.capital} 
              </span>
            </span>

            {/* More country details */}
            <div className='flex flex-col justify-center gap-2  mt-6'>
              <span className='text-gray-800 gap-10 font-thin text-md' style={styles}>
                <span className='font-bold text-md'>Top Level Domain: </span>
                { country.topLevelDomain && country.topLevelDomain[0]}
              </span>
              <span className='text-gray-800 gap-2 font-thin text-md'style={styles}>
                <span className='font-bold'>Currencies: </span>
          
                {  country.currencies && country.currencies[0].name}
              </span>
              <span className='text-gray-800 gap-2 font-thin text-md' style={styles}>
                <span className='font-bold'>Languages: </span>
                {country.languages[0]?.name}   {country.languages[1]?.name}   {country.languages[2]?.name}
              </span>
            </div>
          </div>

          {/* country border */} 
          {
            country.borders &&
             <span className='flex flex-wrap gap-4 items-center w-full text-gray-800  font-bold text-md' style={styles}>
             Border Countries:
             {
               country.borders?.map((border) => (
                 <span className='font-thin px-4 py-1 shadow-md' style={{backgroundColor: bgTop, color: textColor}}>{border} </span>
   
               ))  
             }
           
             </span>
          }
          
        </div>
      </div>
  );
}



export default CountryPage;
