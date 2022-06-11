import React from "react";
import { Link } from "react-router-dom";
import Frame5 from "../Frame5";
import "./HomePage.css";
import gif1 from "../../dist/img/ETH-GIF.gif"
import gif2 from "../../dist/img/gif2.gif"
import gif3 from "../../dist/img/gif3.gif"
import React, { useState } from "react";
import { ethers } from "ethers";

function HomePage(props) {
  const {
    iconBluetooth,
    surname,
    gallery,
    team,
    discordLogoWhite11,
    iconTwitter1,
    iconInstagram1,
    overlapGroup2,
    connectWallet,
    welcomeToTheGoldenKeySociety,
    aLimitedNftCollec,
    x177132D6Dc09449DA01377990A7Bd35E1,
    joinTheSociety,
    mint,
    line2,
    theSpecs,
    eachGoldenKeyNft,
    ethGif1,
    line3,
    welcomeToTheSociety,
    theGoldenKeySocie,
    line4,
    educationNetworking,
    withOver24Speaker,
    ezgif1,
    line5,
    line6,
    imb_Qmeoin1,
    roadmap,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    communityTools,
    joinUsInDiscord,
    joinHere,
    line7,
    theTeam,
    gksWasCreatedByF,
    x908E830238494E71A9A52Ee2Ef0299711,
    spanText9,
    spanText10,
    line8,
    discordLogoWordmarkWhite1,
    discordLogoWhite12,
    iconTwitter2,
    iconInstagram2,
  } = props;
  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  const btnhandler = () => {
    
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };
  
  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
  
  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });
  
    // Setting a balance
    getbalance(account);
  };
  return (
    <div className="container-center-horizontal">
      <div className="home-page screen">
        <div className="flex-col">
          <div className="flex-row">
            <Link to="/landing-page" className="align-self-flex-end">
              <img className="icon-bluetooth" src={iconBluetooth} />
            </Link>
            <div className="overlap-group3">
              <Link to="/white-paper">
                <div className="surname valign-text-middle montserrat-medium-white-30px">{surname}</div>
              </Link>
              <a href="#roadmap">
                <div className="gallery valign-text-middle montserrat-medium-white-30px">{gallery}</div>
              </a>
              <a href="#the-team">
                <div className="team valign-text-middle montserrat-medium-white-30px">{team}</div>
              </a>
              <div className="social">
                <a href="https://discord.gg/goldenkeysociety" target="_blank">
                  <img className="discord-logo-white-1" src={discordLogoWhite11} />
                </a>
                <a href="https://twitter.com/goldenkeynft?s=20&t=oVK6Ey40jgoYkYsDcPi3Kw" target="_blank">
                  <img className="icon-twitter" src={iconTwitter1} />
                </a>
                <a href="https://www.instagram.com/goldenkeysociety.io/" target="_blank">
                  <img className="icon-instagram" src={iconInstagram1} />
                </a>
              </div>
            </div>
          </div>
          <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
            <div onClick={btnhandler} className="frame-4">
              <div className="connect-wallet valign-text-middle montserrat-extra-bold-black-40px">{ data.Balance? "Connected":connectWallet}</div>
            </div>
          </div>
          <div className="flex-row-1">
            <div className="overlap-group4">
              <h1 className="welcome-to-the-golden-key-society valign-text-middle">{welcomeToTheGoldenKeySociety}</h1>
              <div className="a-limited-nft-collec valign-text-middle montserrat-normal-white-36px">
                {aLimitedNftCollec}
              </div>
            </div>
            <img className="x177132-d6-dc09-449-d" src={x177132D6Dc09449DA01377990A7Bd35E1} />
          </div>
          <div className="overlap-group1">
            <div className="join-the-society valign-text-middle montserrat-extra-bold-black-40px">{joinTheSociety}</div>
            <a target="_blank" href = "https://www.premint.xyz/goldenkeysociety/">
            <div className="overlap-group7">
              <div className="mint valign-text-middle">{mint}</div>
            </div>
            </a>
          </div>
          <img className="line-2" src={line2} />
        </div>
        <div className="flex-row-2">
          <div className="flex-col-1">
            <div className="the-specs valign-text-middle montserrat-extra-bold-white-48px">{theSpecs}</div>
            <div className="each-golden-key-nft valign-text-middle montserrat-normal-white-36px">
              {eachGoldenKeyNft}
            </div>
          </div>
          <img className="eth-gif-1" src={gif1}  />
        </div>
        <img className="line-3" src={line3} />
        <div className="home-page-item valign-text-middle montserrat-extra-bold-white-48px">{welcomeToTheSociety}</div>
        <div className="the-golden-key-socie valign-text-middle montserrat-normal-white-36px">{theGoldenKeySocie}</div>
        <img className="line-4" src={line4} />
        <div className="home-page-item valign-text-middle montserrat-extra-bold-white-48px">{educationNetworking}</div>
        <div className="flex-row-3">
          <div className="with-over-24-speaker valign-text-middle montserrat-normal-white-36px">
            {withOver24Speaker}
          </div>
          <img className="ezgif-1" src={gif2} />
        </div>
        <div className="overlap-group5">
          <img className="line-5" src={line5} />
          <img className="line-6" src={line6} />
          <img className="imb_q-me-oin-1" src={gif3} />
          <div className="roadmap valign-text-middle montserrat-extra-bold-white-48px" id="roadmap">
            {roadmap}
          </div>
          <div className="q3-july-september-go valign-text-middle">
            <span>
              <span className="montserrat-bold-old-gold-36px">{spanText1}</span>
              <span className="montserrat-medium-white-32px">{spanText2}</span>
              <span className="montserrat-bold-old-gold-36px">{spanText3}</span>
              <span className="montserrat-medium-white-32px">{spanText4}</span>
              <span className="montserrat-bold-old-gold-36px">{spanText5}</span>
              <span className="montserrat-medium-white-32px">{spanText6}</span>
              <span className="montserrat-bold-old-gold-36px">{spanText7}</span>
              <span className="montserrat-medium-white-32px">{spanText8}</span>
            </span>
          </div>
        </div>
        <div className="community-tools valign-text-middle montserrat-extra-bold-white-48px">{communityTools}</div>
        <div className="flex-row-4">
          <div className="join-us-in-discord valign-text-middle montserrat-semi-bold-white-36px">{joinUsInDiscord}</div>
          <a href="https://discord.gg/goldenkeysociety" target="_blank">
            <div className="group-2">
              <div className="overlap-group">
                <div className="rectangle-8"></div>
                <div className="join-here valign-text-middle">{joinHere}</div>
              </div>
            </div>
          </a>
        </div>
        <img className="line-7" src={line7} />
        <div className="flex-row-5">
          <div className="overlap-group6">
            <div className="the-team valign-text-middle montserrat-extra-bold-white-48px" id="the-team">
              {theTeam}
            </div>
            <div className="gks-was-created-by-f valign-text-middle montserrat-semi-bold-white-36px">
              {gksWasCreatedByF}
            </div>
          </div>
          <img className="x908-e8302-3849-4-e71" src={x908E830238494E71A9A52Ee2Ef0299711} />
        </div>
        <div className="verified-smart-contr valign-text-middle">
          <span>
            <span className="span0">{spanText9}</span>
            <span className="span1">{spanText10}</span>
          </span>
        </div>
        <img className="line-8" src={line8} />
        <div className="flex-row-6">
          <a href="https://discord.gg/goldenkeysociety." target="_blank" className="align-self-flex-center">
            <img className="discord-logo-wordmark-white-1" src={discordLogoWordmarkWhite1} />
          </a>
          <Frame5 />
          <div className="social-1">
            <a href="https://discord.gg/goldenkeysociety" target="_blank">
              <img className="discord-logo-white-1-1" src={discordLogoWhite12} />
            </a>
            <a href="https://twitter.com/goldenkeynft?s=20&t=oVK6Ey40jgoYkYsDcPi3Kw" target="_blank">
              <img className="icon-twitter-1" src={iconTwitter2} />
            </a>
            <a href="https://www.instagram.com/goldenkeysociety.io/" target="_blank">
              <img className="icon-instagram-1" src={iconInstagram2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
