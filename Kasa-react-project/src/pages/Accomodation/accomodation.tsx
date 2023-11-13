import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import accommodationsData from "../../data/accommodations.json";
import Accordion from "../../components/Accordion/accordion";
import Carousel from "../../components/Carousel/carousel";
import Host from "../../components/Host/host";
import Rating from "../../components/Rating/rating";
// import { Accommodation } from "../../components/Accommodations/types"; // import the interface

const Accomodation: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // specify type for id
  const navigate = useNavigate();

  // Now you can use this id to fetch or filter the data for the specific accommodation
  const accommodationData = accommodationsData.find((acc) => acc.id === id);

  // If there's no matched accommodation, you can render a not found message or redirect
  useEffect(() => {
    if (!accommodationData) {
      navigate("/not-found", { replace: true }); // Redirect to a path that will trigger the catch-all route
    }
  }, [accommodationData, navigate]);

  if (!accommodationData) {
    return null; // This will prevent the component from rendering further
  }

  // Render your page based on accommodationData
  return (
    <div className="accommodation container">
      {accommodationData && <Carousel images={accommodationData.pictures} />}

      <div className="info">
        <div className="info__left">
          <h1 className="accommodation__title">{accommodationData.title}</h1>
          <p className="accommodation__location">
            {accommodationData.location}
          </p>
          <ul className="accommodation__tags">
            {accommodationData.tags?.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="info__right">
          <Host host={accommodationData.host} />
          <Rating rating={Number(accommodationData.rating)} />
        </div>
      </div>

      <div className="accordion_row">
        <Accordion title="Description">
          <p>{accommodationData.description}</p>
        </Accordion>
        <Accordion title="Equipement">
          <div>
            <ul className="equipments">
              {accommodationData.equipments?.map((equipment, index) => (
                <li key={index} className="equipments_item">
                  {equipment}
                </li>
              ))}
            </ul>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default Accomodation;
