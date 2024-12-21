import React, { useState } from 'react'
import './Application.css'
import BioPackaging from './SubApplicatons/BioPackaging';
import CompostingSolution from './SubApplicatons/CompostingSolution';
import { Link } from 'react-router-dom';
function Environmental() {

const [btnState,setBtnState] = useState('');

  return (
    <>
    <div className='container-env' id='environmental'>
    <div id='agri' className='app-container'>
      <div className='cards'>
        <div className='sub-card'>
        <Link to="/biopackage"><button className='app-btn button-71' onClick={()=>{setBtnState(btnState === 'btn1'?'':'btn1')}}>Explore </button></Link>
        <div className="card-content">
            <p className="heading">Biodegradable Packaging</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
        </div>
        <div className="sub-card">
    <Link to ="/compostingsolution"> <button className='app-btn button-71' onClick={()=>{setBtnState(btnState === 'btn2'?'':'btn2')}}>Explore</button></Link>
    <div className="card-content">
            <p className="heading">Composting Solution</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
    </div>
    </div>
    {/* <Link activeClass='active' to='medical' spy={true} smooth={true} offset={-65} duration={100} ><button className='app-btn'>Consumer Goods</button></Link> */}
    
    </div>

    
  
    </div>
    </>
  )
}

export default Environmental