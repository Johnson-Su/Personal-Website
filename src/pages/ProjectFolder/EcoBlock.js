import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import UnderConstruction from "../../components/ProjectPageComponents/UnderConstruction.js"


function EcoBlock() {
  return (
    <>
    <Navbar/>
    <div className="spacerM mnone"></div>
    <div style={{height:'32px',width:'100%'}}></div>

    <Overview
        status="Hackathon Winner"
        title="EcoBlock"
        desc="Sustainable & scalable POS blockchain and wallet with innovative green minting incentives"
        copyright=""
        links={["Devpost|https://devpost.com/software/ecoblock","GitHub|https://github.com/Johnson-Su/EcoBlock"]}
        image="mecoblock.png"
        style={{background: 'linear-gradient(90deg, #1DB48A 0%, #4CEA62 100%)', borderRadius: '12px'}}
    />

    <div className="spacerM"></div>

    <Probsol
        problem="How can we make cryptocurrencies sustainable so that they can be used widely without wasting energy?"
        solution="Create a proof of stake based coin (consumes ~99% less energy) that awards minters better rates if they utilize clean energy"
        tools="Dart, Typescript, Python, Node.js, Flutter, Google OCR, Firebase, Figma"
        team="Vincent Li, Ananya Poddar, Benjamin Saobuppha"
        duration="24h"
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

export default EcoBlock;
