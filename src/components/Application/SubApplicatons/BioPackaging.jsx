import React, { useState } from 'react'
import { Link } from 'react-router-dom';
 

function BioPackaging({onselect}) {
  const handleButtonClick = (applicationName) => {
    console.log(applicationName)
    onselect(applicationName);
  };
   
    return (  
    <>
    <div className='app-container'>

    <div className='cards' id='biopackage'>

      <div className="sub-card">
      <Link to="/application"><button className='app-btn button-71' onClick={() => handleButtonClick('filmsandcoatings')}>Explore</button></Link>
      <div className="card-content">
            <p className="heading">Films and Coatings</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
      </div>
      <div className="sub-card">
      <Link to="/application"><button className='app-btn button-71' onClick={() => handleButtonClick('containersandutensils')}>Explore</button></Link>
      <div className="card-content">
            <p className="heading">Containers and utensils</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
      </div></div>
      
    </div>
    
    </>
  )
}

export default BioPackaging