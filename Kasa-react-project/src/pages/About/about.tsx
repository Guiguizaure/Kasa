import Banner from "../../components/Banner/banner";
import aboutBanner from "../../assets/about-banner.png";
import Accordion from "../../components/Accordion/accordion";
import about from "../../data/about.json";

const About: React.FC = () => {
  return (
    <div className="about_page">
      <Banner image={aboutBanner} />

      <div className="accordion_column container">
        <Accordion title="Fiabilité">
          <p>{about.fiability}</p>
        </Accordion>
        <Accordion title="Respect">
          <p>{about.respect}</p>
        </Accordion>
        <Accordion title="Service">
          <p>{about.service}</p>
        </Accordion>
        <Accordion title="Sécurité">
          <p>{about.security}</p>
        </Accordion>
      </div>
    </div>
  );
};

export default About;
