import mobileLogo from "../images/mobile_logo.png";
import logotitle from "../images/logo_title.png";
import heroImg from "../images/hero.png";
import { NavLink } from "react-router-dom";
import twitterIcon from "../images/twiteer.png";
import openseaIcon from "../images/opensea.png";
import logo from "../images/logo.png";
import { useState } from "react";
import openseaIconMobile from "../images/opensea__mobile.png";
import twitterIconMobile from "../images/twiteer__mobile.png";
import cross from "../images/cross.png";
import Image from "next/image";

const HeroSection = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <Image src={logo} alt="logo" />
            </div>
            <div
              className={showNav ? "navbar active__navbar" : "navbar"}
              id="navbar"
            >
              <ul className="nav__items">
                <li className="list__item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li
                  className="list__item"
                  onClick={() => {
                    const about = document.querySelector("#story");
                    about.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <NavLink to="#story">About</NavLink>
                </li>
                <li
                  className="list__item"
                  onClick={() => {
                    const team = document.querySelector("#team");
                    team.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <NavLink to="#team">Team</NavLink>
                </li>

                <li
                  className="list__item"
                  onClick={() => {
                    const home = document.querySelector("#faq");
                    home.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <NavLink to="#faq">Faq</NavLink>
                </li>
                <li className="list__item mobile__icon">
                  <a href="https://twitter.com/DegenwarriorNFT" target="_blank">
                    <Image src={twitterIconMobile} alt="" />
                  </a>
                </li>
                <li className="list__item mobile__icon">
                  <NavLink to="#faq">
                    <Image src={openseaIconMobile} alt="" />
                  </NavLink>
                </li>
              </ul>

              <div className="social__media">
                <div className="icon">
                  <a href="https://twitter.com/DegenwarriorNFT" target="_blank">
                    <Image src={twitterIcon} alt="twiteer" />
                  </a>
                </div>

                <div className="icon" id="opensea">
                  <Image src={openseaIcon} alt="opensea" />
                </div>
              </div>
              <div className="button">
                <button>MINT</button>
              </div>
            </div>
          </nav>
          <div className="mobile__navbar">
            <div className="mobile__logo">
              <Image src={mobileLogo} alt="mobile_logo" />
            </div>
            <div className="logo__title">
              <Image src={logotitle} alt="logotitle" />
            </div>
            <div className="bars" id="bar" onClick={() => setShowNav(!showNav)}>
              {showNav ? (
                <>
                  <Image src={cross} alt="" />
                </>
              ) : (
                <>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </>
              )}
            </div>
          </div>
          {/* style={{padding:'0px 10px', position: 'fixed'}} */}
          <section className="hero__section">
            <div className="top__section">
              <div className="left__text">
                <h1>degen</h1>
              </div>
              <div className="hero__image">
                <Image src={heroImg} alt="" />
              </div>
              <div className="right__text">
                <h1>warrior</h1>
              </div>
            </div>

            <div className="button__mobile">
              <button disabled>MINT</button>
            </div>

            <div className="bottom__text">
              <p>
                Unleashing 1366 ancient Chinese warriors on the Ethereum
                blockchain for the Chinese New Year 2023. Collect and defend
                your kingdom with the Degen Warriors.
              </p>

              <div className="border"></div>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default HeroSection;
