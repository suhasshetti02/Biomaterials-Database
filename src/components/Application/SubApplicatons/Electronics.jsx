import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Electronics({onselect}) {
  const handleButtonClick = (applicationName) => {
    console.log(applicationName)
    onselect(applicationName);
  };
  return (
    <>
    <div className='app-container' id='electronics'>
      <div className="cards">
        <div className="sub-card">
      <Link to="/application"><button className='app-btn button-71' onClick={() => handleButtonClick('flexibleelectronics')}>Explore</button> </Link>
      <div className="card-content">
            <p className="heading">Biodegradable Substrates</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
      </div></div>
    </div>
   
    </>
  )
}

export default Electronics