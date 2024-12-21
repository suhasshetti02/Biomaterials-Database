import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function MedicalImplants({onselect}) {
  const handleButtonClick = (applicationName) => {
    console.log(applicationName)
    onselect(applicationName);
  };
  return (
    <>
    <div className='app-container' id='medical'>

      <div className="cards">
        <div className="sub-card">
      <Link to="/application"><button className='app-btn button-71' onClick={() => handleButtonClick('dentalimplants')}>Explore</button></Link>
      <div className="card-content">
            <p className="heading">Dental Implants</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
      </div>
      <div className="sub-card"><Link to="/application"><button className='app-btn button-71' onClick={() => handleButtonClick('orthopedicscrews')}>Explore</button></Link>
      <div className="card-content">
            <p className="heading">Orthopedic Screws and Plates</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
      </div>
      <div className="sub-card">
      <Link to="/application"><button className='app-btn button-71' onClick={() => handleButtonClick('cardiovascularstents')}>Explore</button></Link>
      <div className="card-content">
            <p className="heading">Cardiovascular Stents</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
       </div></div></div>
       
       </>
  )
}

export default MedicalImplants