import FaqItems from "./FaqItems";

interface FaqData {
  id: number;
  question: string;
  answer: string;
}

const FaqQuestions: FaqData[] = [
  {
    id: 1,
    question: "What is Degen Warriors?",
    answer:
      "Degen Warriors is an immaculate collection of 1366 digital warriors unleashing their power on this Chinese New Year 2023.",
  },
  {
    id: 2,
    question: "When will the mint details be shared?",
    answer:
      "Mint details will be published on our Twitter page 1-2 days before our sale. Don't believe anywhere except our Twitter page.",
  },
  {
    id: 3,
    question: "When will the NFTs be revealed?",
    answer: "NFTs will be revealed one day after the mint ends.",
  },
];

const Faq = () => {
  return (
    <div className="faq__all" id="faq">
      <div className="faq__faq">
        <div className="team__title">FAQ</div>
      </div>
      <div className="faq__scroll">
        <div className="accordion">
          {FaqQuestions.map((curElm) => (
            <FaqItems data={curElm} key={curElm.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;