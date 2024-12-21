import React, { useEffect, useState } from 'react'
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Application from './components/Application/Application';
import OrgnicEnergy from './components/Application/SubApplicatons/SubSubApplications/OrganicEnergy';
import MaterialDisplay from './components/Application/MaterialDisplay';
import BioPackaging from './components/Application/SubApplicatons/BioPackaging';
import TissueEngg from './components/Application/SubApplicatons/TissueEngg';
import MedicalImplants from './components/Application/SubApplicatons/MedicalImplants';
import BioBatteries from './components/Application/SubApplicatons/BioBatteries';
import Electronics from './components/Application/SubApplicatons/Electronics';
import CompostingSolution from './components/Application/SubApplicatons/CompostingSolution';
import Environmental from './components/Application/Environmental';
import Healthcare from './components/Application/Healthcare';
import Energy from './components/Application/Energy';
import Materials from './components/Application/Materials';
import Database from './components/Application/Database';
import { Contact } from './components/contact';



function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const [btnState,setBtnState] = useState('');
  const [applSelected, setApplSelected] = useState('');
  const [matName, setMatName] = useState('');
  const  router = createBrowserRouter([
    {path : "/",
      element :<Application  /> 
    },
    {path : "/environmental",
      element :<Environmental/> 
    },
    {path : "/health",
      element :<Healthcare/> 
    },
    {path : "/energy",
      element :<Energy/> 
    },

  
    {path : "/biopackage",
      element : <BioPackaging onselect ={setApplSelected}/>
    },
    {
      path : "/compostingsolution",
      element : <CompostingSolution onselect ={setApplSelected}/>
    },
    {
      path : "/tissue",
      element : <TissueEngg onselect ={setApplSelected}/>
    },
    {
      path : "/medicalimplants",
      element : <MedicalImplants onselect ={setApplSelected}/>
    },
    {
      path : "/biobatteries",
      element : <BioBatteries onselect ={setApplSelected}/>
    },
    {
      path : "/flexibleelectronics",
      element : <Electronics onselect ={setApplSelected}/>
    },
    
    {
       path : "/application",
       element : <MaterialDisplay applSelected={applSelected} onselect={setMatName}/>
    },
    {
       path : "/materials",
       element : <Materials applSelected={applSelected} matName={matName}/>
    }


    



  ])

  useEffect(()=>{
    localStorage.setItem('current_theme',theme)
  },[theme])

  return (
    <div className={`container ${theme}`}>
      
      <BrowserRouter>
      
      <Navbar theme = {theme} setTheme = {setTheme}/>
      <Routes>
        <Route path="/database" element={<Database />} />
      </Routes>
      <Routes>
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </BrowserRouter>
      
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App