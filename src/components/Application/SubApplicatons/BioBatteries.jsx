import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './../Application.css';
function BioBatteries({onselect}) {
  
  const handleButtonClick = (applicationName) => {
    console.log(applicationName)
    onselect(applicationName);
  };
  return (
    <>
    <div className ="app-container">
    <div className="cards">
          <div className="sub-card">
    <div id='biobatteries'>
      <Link to="/application"><button className='app-btn button-71' onClick={() => handleButtonClick('biobatteries')}>Explore</button></Link>
      <div className="card-content">
            <p className="heading">Organic Energy Storage Materials</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
      </div></div>
      
    </div>
    </div>
    </>
  )
}

export default BioBatteries