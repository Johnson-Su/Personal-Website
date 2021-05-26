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
        status="Hackathon Winner"
        title="Certi-Chain"
        desc="Blockchain powered solution to prevent the counterfeiting of products"
        copyright=""
        links={["Devpost|https://devpost.com/software/certi-chain","GitHub|https://github.com/Johnson-Su/Certi-Chain"]}
        image="mcertichain.png"
        style={{backgroundColor: '#D4D4D4', borderRadius: '12px'}}
    />

    <div className="spacerM"></div>

    <Probsol
        problem="How can I know that the product I'm buying is authentic?"
        solution="Attach a unique id onto the product that cannot be faked on the product using blockchain"
        tools="Python, Flask, HTML5, CSS3, NFC, Figma"
        team="Jielin Xia, Vincent Li, Benjamin Saobuppha"
        duration="36h"
        optionname="Topic"
        optioncontent="Blockchain"
    />

    <div className="spacerL"></div>

    <UnderConstruction/>

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default CertiChain;
