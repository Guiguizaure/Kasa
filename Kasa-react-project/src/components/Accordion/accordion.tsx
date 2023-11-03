import React, { useState } from "react";
import chevron from "../../assets/chevron-up.svg";

interface AccordionProps {
  title: string;
  children?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion">
      <div className="accordion-header">
        {title}
        <img
          src={chevron}
          alt="Toggle"
          className={`chevron ${isOpen ? "chevron--active" : ""}`}
          onClick={toggleAccordion}
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
