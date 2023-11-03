// Accordion.tsx
import React, { useState } from "react";

interface AccordionProps {
  title: string; // the title/header of the accordion section
  children?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
