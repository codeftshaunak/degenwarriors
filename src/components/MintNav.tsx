import logoAnother from "../images/mint/icon_desktop_3.png";
import logoMint from "../images/mint/logo.png";
import logoTwitter from "../images/mint/twiteer_desktop_1.png";
import logoOpensea from "../images/mint/opensea_desktop_2.png";

const MintNav = () => {
  return (
    <div className="mint__navbar">
      <div className="container">
        <div className="logo">
          <img src={logoMint.src} alt="deganwarrier" />
        </div>
        <div className="social__icon">
          <img src={logoTwitter.src} alt="twiteer" />
          <img src={logoOpensea.src} alt="opensea" />
          <img src={logoAnother.src} alt="another" />
        </div>
      </div>
    </div>
  );
};

export default MintNav;
