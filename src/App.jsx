import React from 'react';
import Heading from './components/Heading';
import Home from './Page/Home';
import CountryPage from './Page/CountryPage';
import { useStateContext } from './context/StateContext';

import  {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom';



const Layout = () => {
  const {background} = useStateContext()
  return (
    <div style={{background: background}}>
        <Heading />
        <ScrollRestoration /> 
        <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
   {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
        
      },
      {
        path:"/country/:countryName",
         element: <CountryPage />
      }
    ]
   }
  ]) 

function App() {
  const {background} = useStateContext()
  return (
    // use goggle fonts and
    <div className="font-nunito-sans max-w-[1440px] min-w-[375px]  m-auto" style={{background: background}}>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
