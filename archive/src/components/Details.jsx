import React from "react";

const Details = () => {
  return (
    <>
      <div className="details" id="info">
        <div className="container">
          <div className="team__title">MINT DETAILS</div>
          <div className="all__details">
            <div className="details__item">
              <p>Collection Size</p>
              <h1 className="team__title">1366</h1>
            </div>
            <div className="details__item">
              <p> Mint date</p>
              <h1 className="team__title">22 jan</h1>
            </div>
            <div className="details__item">
              <p>WL Sale (ETH)</p>
              <h1 className="team__title">-</h1>
            </div>
            <div className="details__item">
              <p>Public Sale (ETH)</p>
              <h1 className="team__title">-</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
