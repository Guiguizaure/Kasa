import accommodationsData from "../../data/accommodations.json";
import { Accommodation } from "./types"; // import the interface
import { Link } from "react-router-dom";

const Accommodations: React.FC = () => {
  return (
    <div className="list_accommodations container">
      {accommodationsData.map((accommodation: Accommodation) => (
        <Link to={`/fiche-logement/${accommodation.id}`} key={accommodation.id}>
          <div key={accommodation.id} className="accommodation_card">
            <h2>{accommodation.title}</h2>
            <img src={accommodation.cover} alt={accommodation.title} />
            {/* ... other data ... */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Accommodations;
