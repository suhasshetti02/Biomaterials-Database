import React, { useState } from "react";
import "./Application.css";
import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";
import BioPackaging from "./SubApplicatons/BioPackaging";
import Environmental from "./Environmental";
import Healthcare from "./Healthcare";
import Energy from "./Energy";
import MaterialDisplay from "./MaterialDisplay";
import { TypeAnimation } from "react-type-animation";
import environmental from "./../../assets/img/environmental.jpg";
import health from "./../../assets/img/health.webp";
import energy from "./../../assets/img/energy.png";

function Applicaton({ onselect }) {
  const [activeApp, setActiveApp] = useState("");
  const [applSelected, setApplSelected] = useState("");
  const handleSelect = (applData) => {
    setApplSelected(applData);
  };

  return (
    <>
      <div className="app-container">
        <div className="heading-text">
          <TypeAnimation
            sequence={[
              "Find the Perfect Biomaterial for Your Needs",
              2000,
              "Explore Our Wide Range of Materials",
              2000,
              "Tailored Recommendations for Every Application",
              2000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />{" "}
        </div>

        {/* <button className='app-btn'><Link activeClass='active' to='agri' spy={true} smooth={true} offset={-65} duration={100} >Environmental </Link></button>
    <button className='app-btn'><Link activeClass='active' to='medical'  spy={true} smooth={true} offset={-65} duration={100} >Healthcare and Medicine</Link></button>
    <button className='app-btn'><Link activeClass='active' to='consumer' spy={true} smooth={true} offset={-65} duration={100} >Energy and Electronics</Link></button> 
     */}
        <div className="cards">
        <div className="card">
          <Link
            activeClass="deactive"
            to="environmental"
            spy={true}
            smooth={true}
            offset={-65}
            duration={100}
          >
            <button
              role="button"
              className="app-btn button-71 "
              onClick={() => setActiveApp(activeApp === "app1" ? "" : "app1")}
            >
              Explore
            </button>
          </Link>
          <div className="card-content">
            <p className="heading">Environmental</p>
            <p className="tagline">
              Empowering a Sustainable Future with Innovative Biomaterials
            </p>
          </div>
          <div className="img">
            <img src={environmental} alt="" />
          </div>
        </div>

        <div className="card">
          <Link
            activeClass="deactive"
            to="health"
            spy={true}
            smooth={true}
            offset={-65}
            duration={100}
          >
            <button
              className="app-btn button-71"
              onClick={() => setActiveApp(activeApp === "app2" ? "" : "app2")}
            >
              Explore
            </button>
          </Link>
          <div className="card-content">
            <p className="heading">Healthcare and Medicine</p>
            <p className="tagline">
            Innovating Healthcare with Advanced Biomaterials for Better Healing
            </p>
          </div>
          <div className="img">
            <img src={health} alt="" />
          </div>
        </div>

        <div className="card">
          <Link
            activeClass="deactive"
            to="energy"
            spy={true}
            smooth={true}
            offset={-65}
            duration={100}
          >
            <button
              className="app-btn button-71"
              onClick={() => setActiveApp(activeApp === "app3" ? "" : "app3")}
            >
              Explore
            </button>
          </Link>

          <div className="card-content">
            <p className="heading">Energy and Electronics</p>
            <p className="tagline">
            Powering Innovation with Biomaterials for Energy and Electronics
            </p>
          </div>
          <div className="img">
            <img src={energy} alt="" />
          </div>
        </div>

        </div>
      </div>
      
    </>
  );
}

export default Applicaton;
