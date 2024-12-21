import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { API_URL } from "./../../cofig/apiConfig";
import "./MaterialDisplay.css";
import bonegraft1 from "./../../assets/img/bonegraft/bonegraft1.jpg";
import bonegraft2 from "./../../assets/img/bonegraft/bonegraft2.jpg";
import bonegraft3 from "./../../assets/img/bonegraft/bonegraft3.jpg";
import bonegraft4 from "./../../assets/img/bonegraft/bonegraft4.jpg";
import cartilage1 from "./../../assets/img/cartilage/cartilage1.jpg";
import cartilage2 from "./../../assets/img/cartilage/cartilage2.jpg";
import cartilage3 from "./../../assets/img/cartilage/cartilage3.jpg";
import cartilage4 from "./../../assets/img/cartilage/cartilage4.jpg";
import skin1 from "./../../assets/img/skin/skin1.jpeg";
import skin2 from "./../../assets/img/skin/skin2.jpeg";
import bag1 from "./../../assets/img/bags/bag1.jpeg";
import bag2 from "./../../assets/img/bags/bag2.jpeg";
import bag3 from "./../../assets/img/bags/bag3.jpeg";
import bag4 from "./../../assets/img/bags/bag4.jpeg";
import containers1 from "./../../assets/img/containers/containers1.jpg";
import containers2 from "./../../assets/img/containers/containers2.jpg";
import containers3 from "./../../assets/img/containers/containers3.jpg";
import containers4 from "./../../assets/img/containers/containers4.jpg";
import dental1 from "./../../assets/img/dental/dental1.jpg";
import dental2 from "./../../assets/img/dental/dental2.jpg";
import dental3 from "./../../assets/img/dental/dental3.jpg";
import films1 from "./../../assets/img/films/films1.webp";
import films3 from "./../../assets/img/films/films3.webp";
import films2 from "./../../assets/img/films/films2.webp";
import mulch1 from "./../../assets/img/mulch/mulch1.jpg";
import mulch2 from "./../../assets/img/mulch/mulch2.jpg";
import mulch3 from "./../../assets/img/mulch/mulch3.jpg";
import organic1 from "./../../assets/img/organic/organic1.jpg";
import organic2 from "./../../assets/img/organic/organic2.jpg";
import organic3 from "./../../assets/img/organic/organic3.jpg";
import screws1 from "./../../assets/img/screws/screws1.jpg";
import screws2 from "./../../assets/img/screws/screws2.jpg";
import screws3 from "./../../assets/img/screws/screws3.jpg";
import screws4 from "./../../assets/img/screws/screws4.jpg";
import screws5 from "./../../assets/img/screws/screws5.jpg";
import stents1 from "./../../assets/img/stents/stents1.jpg";
import stents2 from "./../../assets/img/stents/stents2.jpg";
import stents3 from "./../../assets/img/stents/stents3.jpg";
import stents4 from "./../../assets/img/stents/stents4.jpg";
import stents5 from "./../../assets/img/stents/stents5.jpg";
import subtrates1 from "./../../assets/img/subtrates/subtrates1.jpeg";
import subtrates2 from "./../../assets/img/subtrates/subtrates2.png";
import { Link } from "react-router-dom";
import Materials from "./Materials";

function MaterialDisplay({ applSelected,onselect}) {
  const [materials, setMaterials] = useState([]);
  const [images, setImages] = useState([]);
  const [materialName, setMaterialName] = useState("");
  const [materialid, setMaterialId] = useState("");
  const [content, setContent] = useState("");
  

  const selectImage = (materialName,onselct) => {
    switch (materialName) {
      case "biobatteries":
        return [organic1, organic2, organic3];
      case "bonegraft":
        return [bonegraft1, bonegraft2, bonegraft3, bonegraft4];
      case "cardiovascular stents":
        return [stents1, stents2, stents3, stents4, stents5];
      case "cartilage repair":
        return [cartilage1, cartilage2, cartilage3, cartilage4];
      case "compostable bags":
        return [bag1, bag2, bag3, bag4];
      case "Dental implants":
        return [dental1, dental2, dental3];
      case "bio Containers and utensils":
        return [containers1, containers2, containers3, containers4];
      case "films and coatings":
        return [films1, films2, films3];
      case "flexible electronics":
        return [subtrates1, subtrates2];
      case "mulch films":
        return [mulch1, mulch2, mulch3];
      case "orthopedic screws and plates":
        return [screws1, screws2, screws3, screws4, screws5];
      case "bio skin substitutes":
        return [skin1, skin2];
      default:
        return [];
    }
  };

  useEffect(() => {
    if (applSelected) {
      axios
        .get(`${API_URL}/${applSelected}`)
        .then((response) => {
          setMaterials(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [applSelected]);

  useEffect(() => {
    if (materials.length > 0) {
      const MaterialName = materials[0].application;
      setMaterialName(MaterialName);
      setImages(selectImage(materialName));
    }
  }, [materials]);

  if (!applSelected) {
    return <p>No application selected.</p>;
  }

  async function generateAnswer() {
    const responsedata = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDSPYO7RRGxaMRrSIg7eM_TlltRdd4otZg",
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: `${materialName} explain in 1paras 10lines ` }],
          },
        ],
      },
    });
    setContent(
      responsedata["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
  }
  useEffect(() => {
    if (materialName) {
      generateAnswer();
    }
  }, [materialName]);

  const handleButtonClick = (matName) => {

    console.log(matName)
    onselect(matName);
  };

  

  return (
    <div className="container-mat">
      <div className="partitions">
        {/* Image */}
        {/* <div className="mat-img">
            <Slider>
              {Array.isArray(images) && images.length > 0 ? (
                images.map((image, index) => (
                  <img
                    className="img"
                    key={index}
                    src={image}
                    alt={`Material ${index}`}
                  />
                ))
              ) : (
                <p>No images available.</p>
              )}
            </Slider>
          </div> */}

        <div className="header">
          <p>{materialName}</p>
        </div>

        <div className="content">
          <pre>{content ? content : "Loading content..."}</pre>
        </div>

        {/* part 2 */}

        <p className="header">MATERIALS</p>
        <div className="cards">
          {materials.length > 0 ? (
            materials.map((material) => (
              <div key={material._id}>
                <div className="sub-card">
                  <b><p className="headers">{material.material_name}</p></b>
                  <p className="brief-content">
                    <b>Category</b> : {material.category}
                  </p>
                  <p className="brief-content">
                    <b>Bio degradability</b> : {material.biodegradability}
                  </p>
                  <p className="brief-content">
                    <b>Application : </b>
                    {material.application}
                  </p>

                  <Link
                    to = "/materials"
                    smooth={true}
                    offset={-65}
                    duration={500}
                  >
                    {" "}
                    <div className="mat-btn" onClick={() => handleButtonClick(material.material_name)}>Learn more</div>
                  </Link>
                </div>

                <div className="brief-content"></div>
              </div>
            ))
          ) : (
            <p>No materials found.</p>
          )}
        </div>
      </div>


      <div>
      
      </div>
    </div>
  );
}

export default MaterialDisplay;
