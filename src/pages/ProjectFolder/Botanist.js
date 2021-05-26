import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import UnderConstruction from "../../components/ProjectPageComponents/UnderConstruction.js"


function Botanist() {
  return (
    <>
    <Navbar/>
    <div className="spacerM mnone"></div>
    <div style={{height:'32px',width:'100%'}}></div>

    <Overview
        status="Hackathon Winner"
        title="Botanist"
        desc="NLP powered no-code Discord bot generator with a community expandable command library"
        copyright=""
        links={["Devpost|https://devpost.com/software/botanist","GitHub|https://github.com/Johnson-Su/Botanist"]}
        image="mbotanist.png"
        style={{backgroundColor: '#79BD9A', borderRadius: '12px'}}
    />

    <div className="spacerM"></div>

    <Probsol
        problem="How can we make custom Discord bots accessible to people who can't code?"
        solution="Create a no code bot that can translate features in a written request into a new custom bot with those features"
        tools="Javascript, Shell, Discord.js, Google NLP, Figma"
        team="Amy Han & Martina Zou"
        duration="48h"
        optionname="Topic"
        optioncontent="No code development"
    />

    <div className="spacerL"></div>

    <UnderConstruction/>

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default Botanist;
