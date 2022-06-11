import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import WhitePaper from "./components/WhitePaper";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home-page">
          <HomePage {...homePageData} />
        </Route>
        <Route path="/:path(|landing-page)">
          <LandingPage {...landingPageData} />
        </Route>
        <Route path="/white-paper">
          <WhitePaper {...whitePaperData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const homePageData = {
    iconBluetooth: "/img/gk-golden-transparent-1-1@2x.png",
    surname: "White Paper",
    gallery: "Gallery",
    team: "Team",
    discordLogoWhite11: "/img/discord-logo-white-1-2@2x.png",
    iconTwitter1: "/img/2021-twitter-logo---white-1-2@2x.png",
    iconInstagram1: "/img/instagram-glyph-white-1-2@2x.png",
    overlapGroup2: "/img/render-1@1x.png",
    connectWallet: "Connect Wallet",
    welcomeToTheGoldenKeySociety: <React.Fragment>Welcome to the <br />Golden Key Society</React.Fragment>,
    aLimitedNftCollec: "A limited NFT collection where the token itself doubles as your membership to a highly impactful society. We have chosen to use NFT technology to fuel this project because it takes our message global and without bias. This is about lowering the barrier of entry for individuals to obtain education, networking, and opportunity. The perfect token for entrepreneurs, investors, and business owners.",
    x177132D6Dc09449DA01377990A7Bd35E1: "/img/177132d6-dc09-449d-a013-77990a7bd35e-1@1x.png",
    joinTheSociety: "JOIN THE SOCIETY",
    mint: "Mint",
    line2: "/img/line-6-1@2x.png",
    theSpecs: "The Specs",
    eachGoldenKeyNft: <React.Fragment>Each Golden Key NFT is unique and programmatically generated from over 200 possible traits, including gender, headwear, style, and more. All tokens are lit, but some are rarer than others.<br />The Golden Key Society NFTs are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Purchasing a key costs 0.49 ETH.</React.Fragment>,
    ethGif1: "/img/eth-gif-1@1x.png",
    line3: "/img/line-3@1x.png",
    welcomeToTheSociety: "Welcome to the Society",
    theGoldenKeySocie: "The Golden Key Society is not just an NFT Collection, it’s a launchpad for individuals to drastically enhance their lives. Owning a Golden Key Society NFT provides Membership to an exclusive network of peers that can provide the best education, network, and opportunities.",
    line4: "/img/line-3@1x.png",
    educationNetworking: "Education & Networking",
    withOver24Speaker: <React.Fragment>With over 24 speakers a year and Bi-monthly calls with world renown entrepreneurs, businessmen, investors and philanthropists. Holders will also have access to exclusive content such as books, audio, and webinar events. We are bridging the gap of accessibility to the world&#x27;s best. Who do you want to hear from?<br />Holders will be invited to attend the Golden Key Summit event and Golden Key Society Semi-annual. Tokens will Include premier tickets for various entrepreneurial conferences and events. We will be collaborating with other highly regarded masterminds to enable our members to create relationships with successful peers.</React.Fragment>,
    ezgif1: "/img/ezgif-1@1x.png",
    line5: "/img/line-3@1x.png",
    line6: "/img/line-3@1x.png",
    imb_Qmeoin1: "/img/imb-qmeoin-1@1x.png",
    roadmap: "Roadmap",
    spanText1: <React.Fragment>Q3 July-September<br /></React.Fragment>,
    spanText2: <React.Fragment> Golden Key Token Reveal.<br /> Tesla giveaway to holder that draws Tesla  Legendary.<br />VIP Treasure Box Airdrop. <br />Bi-Weekly Webinars with Top Entrepreneurs. ( Mindset )<br />Golden Key Society Semi-annual Event/Launch Party.<br />Golden Key Summit KeyNote Speakers Announced. <br /></React.Fragment>,
    spanText3: <React.Fragment>Q4 Oct - Dec<br /></React.Fragment>,
    spanText4: <React.Fragment>New Bi-weekly Speaker Topic for Webinars ( Business )<br />Q4 Treasure box NFT Airdrop<br />Physical GKS Key Sent to Holders <br />Advertisement Campaign for Golden Key Summit.<br />Vetted investment portal for holders launch.<br /></React.Fragment>,
    spanText5: <React.Fragment>Q1 Jan - Mar<br /></React.Fragment>,
    spanText6: <React.Fragment>New Bi-weekly Speaker Topic for Webinars <br />( Real Estate/Investing )<br />Q1 Treasure Box NFT Airdrop<br />VIP Giveaway for Golden Key Summit <br />GKS Merchandise Roll out.<br /></React.Fragment>,
    spanText7: <React.Fragment>Q2 Apr - Jun<br /></React.Fragment>,
    spanText8: <React.Fragment>Holders Summit Giveaway <br />GKS Fund Launch<br />New Bi-weekly Speaker Topic for Webinars<br /> ( Money Management/ Taxes )<br />Q2 Treasure Box NFT Airdrop<br />Golden Key Summit ( May )</React.Fragment>,
    communityTools: "Community Tools",
    joinUsInDiscord: "Join us in discord! This is a great tool to connect with others joining the Golden Key Society and ask questions about the roadmap. Also grab a whitelist spot to guarantee you a chance at joining this amazing project.   (Link Discord button)",
    joinHere: "Join Here",
    line7: "/img/line-3@1x.png",
    theTeam: "The Team",
    gksWasCreatedByF: <React.Fragment>GKS was created by four individuals who set out to make some amazing impact, change lives for generations, and build something groundbreaking.<br />Lindsey J.: Art Management &amp; Roadmap Management<br />Nick S.: Education &amp; Speakers<br />Dusky D.: Marketing &amp; Community Management<br />Spencer M.: Investment Management &amp; Business Structure.</React.Fragment>,
    x908E830238494E71A9A52Ee2Ef0299711: "/img/908e8302-3849-4e71-a9a5-2ee2ef029971-1@1x.png",
    spanText9: "VERIFIED SMART CONTRACT ADDRESS: ",
    spanText10: "COMING SOON!",
    line8: "/img/line-8-1@1x.png",
    discordLogoWordmarkWhite1: "/img/discord-logo-wordmark-white-1@2x.png",
    discordLogoWhite12: "/img/discord-logo-white-1@2x.png",
    iconTwitter2: "/img/2021-twitter-logo---white-1-3@2x.png",
    iconInstagram2: "/img/instagram-glyph-white-1-3@2x.png",
};

const frame52Data = {
    className: "frame-6",
};

const whitePaperData = {
    iconBluetooth: "/img/gk-golden-transparent-1-1@2x.png",
    team: "Team",
    gallery: "Gallery",
    surname: "White Paper",
    discordLogoWhite11: "/img/discord-logo-white-1-2@2x.png",
    iconTwitter1: "/img/2021-twitter-logo---white-1-2@2x.png",
    iconInstagram1: "/img/instagram-glyph-white-1-2@2x.png",
    line8: "/img/line-8-2@1x.png",
    discordLogoWhite12: "/img/discord-logo-white-1@2x.png",
    iconTwitter2: "/img/2021-twitter-logo---white-1-3@2x.png",
    iconInstagram2: "/img/instagram-glyph-white-1-3@2x.png",
    discordLogoWordmarkWhite1: "/img/discord-logo-wordmark-white-1@2x.png",
    frame5Props: frame52Data,
};

const landingPageData = {
    original1: "/img/original-1@1x.png",
    welcomeToTheGoldenKeySociety: <React.Fragment>Welcome to the <br />Golden Key Society</React.Fragment>,
    loweringTheBarrier: "Lowering the barrier of entry for individuals to obtain education, prime Networking, and financial opportunity.",
    place: "ENTER",
    gkWhiteTransparent1: "/img/gk-white-transparent-1@2x.png",
    line8: "/img/line-8-1@2x.png",
    iconInstagram1: "/img/instagram-glyph-white-1@2x.png",
    discordLogoWhite11: "/img/discord-logo-white-1@2x.png",
    iconTwitter1: "/img/2021-twitter-logo---white-1@2x.png",
    discordLogoWordmarkWhite1: "/img/discord-logo-wordmark-white-1@2x.png",
    gkGoldenTransparent1: "/img/gk-golden-transparent-1@2x.png",
    iconInstagram2: "/img/instagram-glyph-white-1@2x.png",
    discordLogoWhite12: "/img/discord-logo-white-1@2x.png",
    iconTwitter2: "/img/2021-twitter-logo---white-1@2x.png",
};

