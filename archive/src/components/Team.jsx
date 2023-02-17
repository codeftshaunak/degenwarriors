import React from "react";
import hero1 from "../images/hero1.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
import hero4 from "../images/hero4.png";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <div className="team" id="team">
        <div className="container">
          <h1 className="team__title">TEAM</h1>
          <div className="team__membar">
            <Image src={hero1} alt="hero" />
            <Image src={hero2} alt="hero" />
            <Image src={hero3} alt="hero" />
            <Image src={hero4} alt="hero" />
            {/* <!-- <Image src="./images/hero5.png" alt="hero"> --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
