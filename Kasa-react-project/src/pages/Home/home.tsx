import Banner from "../../components/Banner/banner";
import homeBanner from "../../assets/home-banner.png";
import Accommodations from "../../components/Accommodations/accommodations";

const Home: React.FC = () => {
  return (
    <div>
      <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
      <Accommodations />
    </div>
  );
};

export default Home;
