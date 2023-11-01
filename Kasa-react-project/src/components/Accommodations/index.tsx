import accommodationsData from "../../data/accommodations.json";
import { Accommodation } from "../Accommodations/types"; // import the interface

const Accommodations: React.FC = () => {
  return (
    <div className="list_accommodations container">
      {accommodationsData.map((accommodation: Accommodation) => (
        <div key={accommodation.id} className="accommodation_card">
          <h2>{accommodation.title}</h2>
          <img src={accommodation.cover} alt={accommodation.title} />
          {/* ... other data ... */}
        </div>
      ))}
    </div>
  );
};

export default Accommodations;
