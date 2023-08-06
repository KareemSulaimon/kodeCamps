
import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  // State variables
  const [bg, setBg] = useState(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  // default color & background
  const [background, setBackground] = useState('hsl(0, 0%, 98%)');
  const [bgTop, setBgTop] = useState('hsl(0, 0%, 100%)');
  const [textColor, setTextColor] = useState('hsl(200, 15%, 8%)');
  const [element, setElement] = useState('hsl(200, 15%, 8%)');

    // Regions
  const regions = ['filter by Region','Africa', 'Asia', 'Europe', 'Americas', 'Oceania'];

  // Fetch data from "/data.json" and store it
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);


  // Helper functions
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
  };

  // Handle changes in the selected region
  const handleRegionChange = (region) => {
    const selectedRegion = region.target.value;
    setSelectedRegion(selectedRegion);
  };
  

  // handle selected region
  useEffect(() => {
    if (selectedRegion) {
      const filteredCountries = data.filter((country) => country.region === selectedRegion);
      setSearchResult(filteredCountries.map((country) => country.name));
    } else {
      setSearchResult(data.map((country) => country.name));
    }
  }, [data, selectedRegion]);

  // Filter the search results based on the user's input
  const filteredCountries = searchResult.filter((country) =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // final Countries 
  const finalCountries = data.filter((country) =>
    filteredCountries.some((query) => country.name.includes(query))
  );

// Activate dark Mode
  const darkModeActivate = () => {
    setBg(!bg);
  };

   // Effects
   useEffect(() => {
    // dark Mode
   if (bg) {
     setBackground('hsl(207, 26%, 17%)');
     setBgTop('hsl(209, 23%, 22%)');
     setTextColor('hsl(0, 0%, 100%)');
     setElement('hsl(0, 0%, 90%)');
   } 
   // white Mode
   else {
     setBackground('hsl(0, 0%, 98%)')
     setBgTop('hsl(0, 0%, 100%)');
     setTextColor(' hsl(200, 15%, 8%)');
    setElement('hsl(200, 15%, 8%)');
   
   }
 }, [bg]);

  
  
  // Provide the states and functions through the Context.Provider
  return (
    <Context.Provider
      value={{
        bg,
        data,
        setData,
        searchResult,
        setSearchResult,
        searchQuery,
        selectedRegion,
        setSearchQuery,
        darkModeActivate,
        handleInputChange,
        handleRegionChange,
        filteredCountries,
        background,
        textColor,
        element,
        finalCountries,
        bgTop,
        regions
       
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
