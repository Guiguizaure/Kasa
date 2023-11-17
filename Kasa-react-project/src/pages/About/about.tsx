import Banner from "../../components/Banner/banner";
import aboutBanner from "../../assets/about-banner.png";
import Accordion from "../../components/Accordion/accordion";
import about from "../../data/about.json";

// We define the type
type AboutSection = {
  title: string;
  content: string;
};

const About: React.FC = () => {
  const sections: AboutSection[] = [
    { title: "Fiabilité", content: about.fiability },
    { title: "Respect", content: about.respect },
    { title: "Service", content: about.service },
    { title: "Sécurité", content: about.security },
  ];

  return (
    <div className="about_page">
      <Banner image={aboutBanner} />

      <div className="accordion_column container">
        {sections.map((section) => (
          <Accordion key={section.title} title={section.title}>
            <p>{section.content}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default About;
