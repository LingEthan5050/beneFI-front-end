// import React from 'react'
// import { Link } from "react-router-dom"

// function Home() {
//   return (
//     <div className="home">
//       <h1 className="home-text">Welcome to BeneFi, eTransactions made easy</h1>
//       <Link to="/sign-up">
//         <button className="signUp-btn"> Sign up </button>
//       </Link>


//     </div>
//   )
// }

// export default Home


import React from "react";
import "./Home.css";

function Index() {
  

  return (
    <div className="container-center-horizontal">
      <div className="index screen">
        <div className="overlap-group1">
          <img
            className="hero-bg"
            style = {{width: "140%",height: "60%"}}src="https://anima-uploads.s3.amazonaws.com/projects/6369f3950c4381d09f8127f4/releases/6369f3a12e9e4aba1410aa37/img/hero-bg@1x.svg"
            alt="hero-bg"
          />
          <img
            className="hero-bg-1"
            style = {{width: "135%",height: "15%"}}src="https://anima-uploads.s3.amazonaws.com/projects/6369f3950c4381d09f8127f4/releases/6369f3a12e9e4aba1410aa37/img/hero-bg-1@1x.svg"
            alt="hero-bg"
          />
          <div className="landing-text">
            <h1>We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto. </h1>
          </div>
          <img
            className="bitcoin-logo"
            src="https://anima-uploads.s3.amazonaws.com/projects/6369f3950c4381d09f8127f4/releases/6369f3a12e9e4aba1410aa37/img/bitcoin-logo@2x.svg"
            alt="bitcoin-logo"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Index;
