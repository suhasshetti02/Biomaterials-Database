import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function CompostingSolution({onselect}){
  const handleButtonClick = (applicationName) => {
    console.log(applicationName)
    onselect(applicationName);
  };

  return (
    <>
    
    <div className='app-container' id='composting'>

      <div className="cards">
        <div className="sub-card">
      <Link to="/application"><button className='app-btn button-71' onClick={() => handleButtonClick('compostablebags')}>Explore</button></Link>
      <div className="card-content">
            <p className="heading">Compostable Bags</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
      </div>
      <div className="sub-card">
    
      <Link to="/application"><button className='app-btn button-71' onClick={() => handleButtonClick('mulchfilms')}>Explore </button></Link>
      <div className="card-content">
            <p className="heading">Mulch Films</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
      </div></div>
      
    </div>
    
    
      </>
  )
}

export default CompostingSolution