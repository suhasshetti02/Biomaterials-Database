import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../cofig/apiConfig"; 

function Materials({ applSelected,matName }) {
  const [materials, setMaterials] = useState([]);

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

  return (
    <>
    
      {materials.length > 0 ? (
        materials.filter((material) => material.material_name === matName).map((material) => (
          <div id={material.material_name} className="mat-card" key={material._id}>
            <div className="mat-head">{material.material_name}</div>
            <div className="mat-content">
              <div className="mat-body">
                <p>
                  <strong>Category:</strong> {material.category}
                </p>
                <p>
                  <strong>Material Notes:</strong> {material.material_notes}
                </p>
                <p>
                  <strong>Biodegradability:</strong> {material.biodegradability}
                </p>
                <div className="mat-applications">
                  <p>
                    <strong>Applications:</strong>
                  </p>
                  <ul>
                    {material.applications.map((app, index) => (
                      <li key={index}>{app}</li>
                    ))}
                  </ul>
                </div>
                <div className="mat-properties">
                  <p>
                    <strong>Properties:</strong>
                  </p>
                  {material.properties.map((prop, index) => (
                    <p key={index}>{prop}</p>
                  ))}
                </div>
                <div className="properties">
                  {["physical", "mechanical", "thermal", "optical", "processing"].map(
                    (type) => {
                      const propKey = `${type}_properties`;
                      if (material[propKey] && material[propKey].length > 0) {
                        return (
                          <div className={`mat-${type}-properties`} key={type}>
                            <p>
                              <strong>{type.charAt(0).toUpperCase() + type.slice(1)} Properties:</strong>
                            </p>
                            <table>
                              <thead>
                                <tr>
                                  <th>Property</th>
                                  {type === "optical" || type === "processing" ? (
                                    <th>Value</th>
                                  ) : (
                                    <>
                                      <th>Metric</th>
                                      <th>English</th>
                                    </>
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                {material[propKey].map((prop, index) => (
                                  <tr key={index}>
                                    <td>{prop.property}</td>
                                    {type === "optical" || type === "processing" ? (
                                      <td>{prop.value}</td>
                                    ) : (
                                      <>
                                        <td>{prop.metric}</td>
                                        <td>{prop.english}</td>
                                      </>
                                    )}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                      return null;
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No materials found.</p>
      )}
    </>
  );
}

export default Materials;
