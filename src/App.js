import { MainNav } from "./MainNav";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StateLeadHome } from "./state-lead/StateLeadHome";
import { StateLeadNavBar } from "./state-lead/StateLeadNavBar";
import BarChart from "./Charts/BarChart";
import { useState } from "react";
import { UserData } from "./Data/ChartsData";
import LineChart from "./Charts/LineChart";
import StateComponent from "./components/StateComponent";
// import LineChart from "./Charts/LineChart";
import Hero from "./components/Hero";
import BrandCarousel from "./components/BrandCarousel";
import SectorTab from "./components/SectorTab";
import LandingPage from "./components/LandingPage";
import 'flowbite';
import { Login } from "./Login";
import {SignUp} from './SignUp'
import Investors from "./investors/Investors";

function App() {

  const router = createBrowserRouter([
    {
      path:'/', 
      element:<MainNav/>,
      children:[
        {index:true, element: <LandingPage /> },
        // {index:true,element:<LineChart chartData={userData}/>}
      ]
    },

    {
      path:'Login',
      element:<Login/>
    },

    {
      path:'SignUp',
      element:<SignUp/>
    },
    

    {
      path:'state-lead',
      children:[
        {index:true,element:<StateLeadNavBar/>},
        {
          path:':stateId',
          children:[
            {index:true,element:<StateComponent/>}
          ]
        }
      ]
    },

    {
      path:'investors',
      children:[
        {index:true,element:<Investors/>},
      
      ]
    },
    

  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
