import React, { useState } from "react";

const FaqItems = (data) => {

  const { id, answer, question } = data.data;
  const [showAccordiono, setShowAccordiano] = useState(false);

  return (
    <>
      <div
        className="accordion-item"
        onClick={() => setShowAccordiano(!showAccordiono)}
      >
        <h2
          id="accordion-button-1"
          aria-expanded={showAccordiono ? "true" : "false"}
        >
          <span className="number">{id}</span>
          <span className="accordion-title">{question}</span>
          <span className="icon" aria-hidden="true"></span>
        </h2>
        <div className="accordion-content">
          <p>{answer}</p>
        </div>
        <hr />
      </div>
    </>
  );
};

export default FaqItems;
