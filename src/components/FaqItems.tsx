import { useState } from "react";
interface FaqData {
  id: number;
  question: string;
  answer: string;
}

interface FaqProps {
  data: FaqData;
}

const FaqItems = ({ data: { id, question, answer } }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item" onClick={() => setIsOpen(!isOpen)}>
      <h2
        id={`accordion-button-${id}`}
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="number">{id}</span>
        <span className="accordion-title">{question}</span>
        <span className="icon" aria-hidden="true"></span>
      </h2>
      {isOpen && (
        <>
          <div className="accordion-content">
            <p>{answer}</p>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default FaqItems;
