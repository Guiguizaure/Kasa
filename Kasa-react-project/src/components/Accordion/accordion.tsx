import React, { useState, useEffect } from "react";
import chevron from "../../assets/chevron-up.svg";
import chevronSmall from "../../assets/chevron-up-small.svg";

interface AccordionProps {
  title: string;
  children?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    // Set the initial value
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = () => setIsOpen(!isOpen);

  // Choose the correct chevron based on the window width
  const chevronIcon = isMobileView ? chevronSmall : chevron;

  return (
    <div className="accordion">
      <div className="accordion-header">
        {title}
        <img
          src={chevronIcon}
          alt="Toggle"
          onClick={toggleAccordion}
          className={`chevron ${isOpen ? "chevron--active" : ""}`}
        />
      </div>
      <div
        className={`accordion-content ${
          isOpen ? "accordion-content--open" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
