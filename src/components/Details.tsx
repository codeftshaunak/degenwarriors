import { useMemo, memo } from "react";

const Details = () => {
  const details = useMemo(() => [
    { name: "Collection Size", value: "1366" },
    { name: "Mint date", value: "22 jan" },
    { name: "WL Sale (ETH)", value: "-" },
    { name: "Public Sale (ETH)", value: "-" },
  ], []);

  return (
    <div className="details" id="info">
      <div className="container">
        <div className="team__title">MINT DETAILS</div>
        <div className="all__details">
          {details.map(({ name, value }, index) => (
            <div key={index} className="details__item">
              <p>{name}</p>
              <h1 className="team__title">{value}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Details);