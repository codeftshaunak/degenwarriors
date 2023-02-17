import React from "react";
import storyImg from "../images/story.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="story" id="story">
        <div className="container">
          <h1 className="story__title">About</h1>
          <div className="story__details">
            <div className="text">
              <p>
                In the land of ancient China, there was a legend of the Degen
                Warriors - fierce and majestic beings who protected their
                kingdom and its people with honour and bravery. Degen warriors,
                chosen by the gods to serve as their soldiers on Earth, are
                imbued with unique abilities and appearances.
              </p>
              <br />
              <br />
              <p>
                As the years passed and the world changed, the legend of the
                Degen Warriors was all forgotten. But in 2023, the year of
                Rabbit, a new generation of Degen Warriors emerged on the
                Ethereum blockchain, reviving the ancient tradition in the
                digital realm. These warriors hold the energy of the Chinese
                rabbit, a symbol of wealth and luck. Anyone who possesses one of
                these digital warriors will receive good fortune and prosperity
                throughout 2023.
              </p>
              <br />
              <br />
              <p>
                Here to solidify their place on the Ethereum blockchain as a
                symbol of strength, honour, and prosperity. Degen Warriors
                invite you all who wish to turn your life around this Chinese
                new year. Let's come and celebrate the greatly auspicious
                Chinese New Year together.
              </p>
            </div>

            <Image src={storyImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
