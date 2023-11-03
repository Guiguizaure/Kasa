import starActive from "../../assets/star-active.svg";
import starDisabled from "../../assets/star-disabled.svg";

interface RatingProps {
  rating: number;
}

const MAX_RATING: number = 5;

const Rating: React.FC<RatingProps> = ({ rating }) => {
  // Create an array of JSX elements representing the stars
  const stars = [];

  for (let i = 1; i <= MAX_RATING; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? starActive : starDisabled}
        alt={i <= rating ? "Active Star" : "Disabled Star"}
        className={`star ${i <= rating ? "active" : "disabled"}`}
      />
    );
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
