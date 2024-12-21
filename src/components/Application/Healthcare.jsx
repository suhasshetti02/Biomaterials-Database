import React, { useState } from "react";
import "./Application.css";
import { Link } from "react-router-dom";
import TissueEngg from "./SubApplicatons/TissueEngg";
import MedicalImplants from "./SubApplicatons/MedicalImplants";

function Healthcare({ onSelect }) {
  const [btnState, setBtnState] = useState("");

  return (
    <>
      <div id="health" >
        <div className="app-container">
          <div className="sub-card">
            <Link to="/tissue">
              <button
                className="app-btn button-71"
                onClick={() => {
                  setBtnState(btnState === "btn1" ? "" : "btn1");
                }}
                to="tissue"
              >
                Explore{" "}
              </button>
            </Link>

            <div className="card-content">
            <p className="heading">Tissue Engineering and Regenration</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
          


          </div>

          <div className="sub-card">
            <Link to="/medicalimplants">
              <button
                className="app-btn button-71"
                onClick={() => {
                  setBtnState(btnState === "btn2" ? "" : "btn2");
                }}
              >
                Explore
              </button>{" "}
            </Link>
            <div className="card-content">
            <p className="heading">Medical Implants</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
          
          </div>
          {/* <Link activeClass='active' to='medical' spy={true} smooth={true} offset={-65} duration={100} ><button className='app-btn'>Consumer Goods</button></Link> */}
        </div>
      </div>
    </>
  );
}

export default Healthcare;
