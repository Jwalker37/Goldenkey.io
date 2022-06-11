import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage(props) {
  const {
    original1,
    welcomeToTheGoldenKeySociety,
    loweringTheBarrier,
    place,
    gkWhiteTransparent1,
    line8,
    iconInstagram1,
    discordLogoWhite11,
    iconTwitter1,
    discordLogoWordmarkWhite1,
    gkGoldenTransparent1,
    iconInstagram2,
    discordLogoWhite12,
    iconTwitter2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page screen">
        <div className="overlap-group1-1">
          <div className="overlap-group-1">
            <img className="original-1" src={original1} />
            <div className="frame-3">
              <div className="welcome-to-the-golden-key-society-1 valign-text-middle montserrat-extra-bold-white-48px">
                {welcomeToTheGoldenKeySociety}
              </div>
              <div className="lowering-the-barrier valign-text-middle">{loweringTheBarrier}</div>
            </div>
            <Link to="/home-page">
              <div className="frame-1">
                <div className="place valign-text-middle">{place}</div>
              </div>
            </Link>
            <div className="frame-1-1">
              <img className="gk-white-transparent-1" src={gkWhiteTransparent1} />
            </div>
            <img className="line-8-1" src={line8} />
          </div>
          <div className="social-2">
            <a href="https://www.instagram.com/goldenkeysociety.io/" target="_blank">
              <img className="icon-instagram-2" src={iconInstagram1} />
            </a>
            <a href="https://discord.gg/goldenkeysociety" target="_blank">
              <img className="discord-logo-white-1-2" src={discordLogoWhite11} />
            </a>
            <a href="https://twitter.com/goldenkeynft?s=20&t=oVK6Ey40jgoYkYsDcPi3Kw" target="_blank">
              <img className="icon-twitter-2" src={iconTwitter1} />
            </a>
          </div>
        </div>
        <div className="flex-row-7">
          <a href="https://discord.gg/goldenkeysociety" target="_blank" className="align-self-flex-center">
            <img className="discord-logo-wordmark-white-1-1" src={discordLogoWordmarkWhite1} />
          </a>
          <img className="gk-golden-transparent-1" src={gkGoldenTransparent1} />
          <div className="social-3">
            <a href="https://www.instagram.com/goldenkeysociety.io/" target="_blank">
              <img className="icon-instagram-2" src={iconInstagram2} />
            </a>
            <a href="https://discord.gg/goldenkeysociety" target="_blank">
              <img className="discord-logo-white-1-2" src={discordLogoWhite12} />
            </a>
            <a href="https://twitter.com/goldenkeynft?s=20&t=oVK6Ey40jgoYkYsDcPi3Kw" target="_blank">
              <img className="icon-twitter-2" src={iconTwitter2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
