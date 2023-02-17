import mobileLogo from "../images/mobile_logo.png";
import logotitle from "../images/logo_title.png";
import heroImg from "../images/hero.png";
import twitterIcon from "../images/twiteer.png";
import openseaIcon from "../images/opensea.png";
import openseaIconMobile from "../images/opensea__mobile.png";
import twitterIconMobile from "../images/twiteer__mobile.png";
import logo from "../images/logo.png";
import cross from "../images/cross.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NavListItem from "./NavListItem";

const HeroSection = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const handleClick = (event: any) => {
  //     if (event.target.id !== "bar") {
  //       setShowNav(!showNav);
  //     }
  //   };
  //   document.addEventListener("click", handleClick);

  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, [showNav]);

  return (
    <>
      <header>
        <div className="container">
          <NavBar showNav={showNav} setShowNav={setShowNav} />
          <section className="hero__section">
            <div className="top__section">
              <div className="left__text">
                <h1>degen</h1>
              </div>
              <div className="hero__image">
                <img src={heroImg.src} alt="hero" />
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
              <div className="border__hr"><hr /></div>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default HeroSection;

const NavBar = ({ showNav, setShowNav }: any) => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo.src} alt="logo" />
        </div>
        <div
          className={`navbar ${showNav ? "active__navbar" : ""}`}
          id="navbar"
        >
          <ul className="nav__items">
            <li className="list__item">
              <Link href="/">Home</Link>
            </li>
            <NavListItem navId="#story" text="About" />
            <NavListItem navId="#team" text="Team" />
            <NavListItem navId="#faq" text="Faq" />
            <li className="list__item mobile__icon">
              <a href="https://twitter.com/DegenwarriorNFT" target="_blank">
                <img src={twitterIconMobile.src} alt="" />
              </a>
            </li>
            <li className="list__item mobile__icon">
              <a href="#faq">
                <img src={openseaIconMobile.src} alt="" />
              </a>
            </li>
          </ul>

          <div className="social__media">
            <div className="icon">
              <a href="https://twitter.com/DegenwarriorNFT" target="_blank">
                <img src={twitterIcon.src} alt="" />
              </a>
            </div>
            <div className="icon" id="opensea">
              {/* <a href="https://opensea.io/assets/degen-warrior" target="_blank"> */}
              <img src={openseaIcon.src} alt="" />
              {/* </a> */}
            </div>
          </div>
          <div className="button">
            <button>MINT</button>
          </div>
        </div>
      </nav>
      <div className="mobile__navbar">
        <div className="mobile__logo">
          <img src={mobileLogo.src} alt="mobile_logo" />
        </div>
        <div className="logo__title">
          <img src={logotitle.src} alt="logotitle" />
        </div>
        <div className="bars" id="bar" onClick={() => setShowNav(!showNav)}>
          {showNav ? (
            <>
              <img src={cross.src} alt="" />
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
    </>
  );
};

