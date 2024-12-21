import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function TissueEngg({onselect}) {

  const handleButtonClick = (applicationName) => {
    console.log(applicationName)
    onselect(applicationName);

  };

  return (
    <>
      <div className="app-container" id="tissue">
        <div className="cards">
          <div className="sub-card">
        <Link to = "/application"><button className="app-btn button-71" onClick={() => handleButtonClick('bonegraft')}>
          Explore
        </button></Link>
        <div className="card-content">
            <p className="heading">Bone Grafts</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div></div>

        <div className="sub-card">
        <Link to = "/application"><button className="app-btn button-71" onClick={() => handleButtonClick('cartilagerepair')}>
          Explore
        </button></Link>
        <div className="card-content">
            <p className="heading">Cartilage Repair</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div></div>

        <div className="sub-card">
        <Link to = "/application"><button className="app-btn button-71" onClick={() => handleButtonClick('skinsubstitues')}>
          Explore
        </button></Link>
        <div className="card-content">
            <p className="heading">Skin Substitutes</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div></div></div>
      </div>

      {/* <div>
        <MaterialDisplay applSelected = {applSelected}/>
      </div> */}
    </>
  );
}

export default TissueEngg;
