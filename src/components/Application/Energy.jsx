import React, { useState } from 'react'
import './Application.css'
import { Link } from 'react-router-dom';
import BioBatteries from './SubApplicatons/BioBatteries';
import Electronics from './SubApplicatons/Electronics';

function Energy() {
  const [btnState,setBtnState] = useState('');

  
  return (
    <> 
    <div className='container-env' id='energy'>
    <div id='agri' className='app-container'>

      <div className="cards"> <div className="sub-card">
        
        <Link to='/biobatteries' ><button className='app-btn button-71' onClick={()=>{setBtnState(btnState === 'btn1'?'':'btn1')}}>Explore </button></Link>
        <div className="card-content">
            <p className="heading">Bio Bateries</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
        </div>
    <div className="sub-card">
    <Link to='/flexibleelectronics'><button className='app-btn button-71' onClick={()=>{setBtnState(btnState === 'btn2'?'':'btn2')}}>Explore</button> </Link>
    <div className="card-content">
            <p className="heading">Flexible Electronics</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
    </div></div>
    {/* <Link activeClass='active' to='medical' spy={true} smooth={true} offset={-65} duration={100} ><button className='app-btn'>Consumer Goods</button></Link> */}
    
    </div>

    
    <div>
      {btnState =='btn1' && <BioBatteries />}
    </div>
    <div>
      {btnState == 'btn2' && <Electronics />}
    </div>
    </div>
    
    </>
  )
}

export default Energy