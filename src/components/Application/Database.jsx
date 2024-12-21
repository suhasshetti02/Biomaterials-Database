import React, { useEffect, useState } from 'react'
import axios from "axios";
import { API_URL } from "./../../cofig/apiConfig";
import './Database.css'

const collectionNames = [
  "biobatteries", "bonegraft", "cardiovascularstents", 
   "cartilagerepair", "compostablebags", "containersandutensils",
  "dentalimplants", "filmsandcoatings",  "flexibleelectronics",
  "mulchfilms", "orthopedicscrews", "skinsubstitues"
];
function Database() {
  const [materials, setMaterials] = useState([]);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let allMaterials = [];
        for (let i = 0; i < collectionNames.length; i++) {
          const response = await axios.get(`${API_URL}/${collectionNames[i]}`);
          allMaterials = [...allMaterials, ...response.data]; // Combine data from all collections
        }
        setMaterials(allMaterials);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div id='database'>
        <p className='header'><b>Bio Materials Database</b></p>
        <div className="materials-table-container">
      <table className="materials-table">
        <thead>
          <tr>
            <th>Application</th>
            <th>Material Name</th>
            <th>Biodegradability</th>
            <th>Applications</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>{material.application}</td>
              <td>{material.material_name}</td>
              <td>{material.biodegradability}</td>
              <td>{material.properties[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        
    </div>
  )
}

export default Database