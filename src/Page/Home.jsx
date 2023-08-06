import React from 'react';
import { useStateContext } from '../context/StateContext';
import Country from '../components/Country';
import { Link  } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';


const Home = () => {
  const {
    background,
    bgTop,
    handleInputChange,
    handleRegionChange,
    searchQuery,
    selectedRegion,
    element,
    regions,
    finalCountries
  }
   = useStateContext()
   

 
  return (
<div className='flex flex-col w-full mt-10'>
    <div className='flex flex-col sm:flex-row md:flex-row gap-10 items-start w-full justify-between sticky z-20 top-32 px-6 sm:px-24'>
    <form className='shadow-md w-full sm:w-1/2 h-10 gap-4 flex justify-center items-center sm:px-6 px-1'  style={{ background: bgTop}}>
      <button aria-label='Search' className='cursor-pointer'>
        <FiSearch style={{color: element}} />
      </button>
      <input
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
        placeholder='Search for a country ...'
        className='w-full border-none outline-0 place  text-sm sm:text-lg '
        style={{ background: bgTop, color: element }}
      />
    </form>

    
 {/* select by region */}
    <select  id="regionFilter"
        className="shadow-md w-56 sm:w-64 h-10  border-none outline-0 shadow-md"
        style={{ background: bgTop, color: element}} 
        onChange={handleRegionChange}
        value={selectedRegion}
      >
      {
        regions.map((option, index) => (
          <option key={index}
              value={option.value}
              name={option.value}
              className="w-1/5 shadow-md max-w-96 min-w-20 h-10 p-6 border-none outline-0 "
              style={{color: element}}
              >{option}
          </option>
        ))                                
      }
      </select>
 
  </div>
    <div className=" flex flex-col w-full  px-6 sm:px-24 items-center font-nunito-sans" >
    <div className='flex flex-wrap w-full justify-center xl:justify-between  md:justify-between gap-16 items-center mt-10' style={{background: background}} >
          
          {/*finalCountries render here */}
          {
            finalCountries.map((country, index) => (
              <Link key={index}  to={`/country/${country.name}`} >
                <Country
                  key={index}
                  country={{
                    name: country?.name,
                    population: country?.population,
                    region: country?.region,
                    capital: country?.capital,
                    flag: country?.flag,
                  }}
                />
              </Link>
              
                
            ))
         }
        </div>
    </div>
</div>
  );
}
export default Home;
