import React from "react";
import { useParams } from "react-router-dom";
import accommodationsData from "../../data/accommodations.json";
import Accordion from "../../components/Accordion";
// import { Accommodation } from "../../components/Accommodations/types"; // import the interface

const Accomodation: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // specify type for id

  // Now you can use this id to fetch or filter the data for the specific accommodation
  const accommodationData = accommodationsData.find((acc) => acc.id === id);

  // If there's no matched accommodation, you can render a not found message or redirect
  if (!accommodationData) {
    return <div>Accommodation not found.</div>;
  }

  // Render your page based on accommodationData
  return (
    <div className="accommodation_details container">
      <h1>{accommodationData.title}</h1>
      <p>{accommodationData.location}</p>
      {/* <img src={accommodationData.cover} alt={accommodationData.title} /> */}
      {/* <p>{accommodationData.description}</p> */}
      <ul className="tag-wrapper">
        {accommodationData.tags?.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <div className="accordion-wrapper">
        <Accordion title="Description">
          <p>{accommodationData.description}</p>
        </Accordion>
        <Accordion title="Equipement">
          <div>
            <ul className="equipments">
              {accommodationData.equipments?.map((equipment) => (
                <li className="equipments_item">{equipment}</li>
              ))}
            </ul>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default Accomodation;
