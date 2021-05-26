import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import UnderConstruction from "../../components/ProjectPageComponents/UnderConstruction.js"


function CertiChain() {
  return (
    <>
    <Navbar/>
    <div className="spacerM mnone"></div>
    <div style={{height:'32px',width:'100%'}}></div>

    <Overview
        status="Hackathon Honorable Mention"
        title="Vaccurate"
        desc="Data powered website for organizing COVID-19 vaccine distribution"
        copyright=""
        links={["Devpost|https://devpost.com/software/vaccurate","GitHub|https://github.com/BenjaminSao/Vaccurate"]}
        image="mvaccurate.png"
        style={{backgroundColor: '#FF4550', borderRadius: '12px'}}
    />

    <div className="spacerM"></div>

    <Probsol
        problem="How can we organize vaccine distribution?"
        solution="Build a website to centralize sign ups and uses that data to organize dose distribution to clinics"
        tools="JavaScript, HTML5, CSS3, Twilio, Figma, Firestore, Bootstrap"
        team="Amy Han, Vincent Li, Benjamin Saobuppha"
        duration="24h"
        optionname="Topic"
        optioncontent="COVID-19"
    />

    <div className="spacerL"></div>

    <UnderConstruction/>

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default CertiChain;
