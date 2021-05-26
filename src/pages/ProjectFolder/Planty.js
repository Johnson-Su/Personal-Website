import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import UnderConstruction from "../../components/ProjectPageComponents/UnderConstruction.js"


function Planty() {
  return (
    <>
    <Navbar/>
    <div className="spacerM mnone"></div>
    <div style={{height:'32px',width:'100%'}}></div>

    <Overview
        status="Hackathon Project"
        title="Planty"
        desc="Google Chrome extension that suggest ingredient substitutes with lower carbon footprints for online recipes"
        copyright=""
        links={["Devpost|https://devpost.com/software/planty-wzuvpn","GitHub|https://github.com/Johnson-Su/Planty"]}
        image="mplanty.png"
        style={{backgroundColor: '#E4E4E4', borderRadius: '12px'}}
    />

    <div className="spacerM"></div>

    <Probsol
        problem="I want to substitute the high carbon footprint ingredients in my recipe with more ecological vegan alternatives"
        solution="An Google Chrome extension that will automatically suggest substitutes for high pollution ingredients when an online recipe is opened"
        tools="Javascript, HTML5, CSS3, Browserify, Firebase, Node.js, Illustrator, Figma"
        team="Linda Ma, Amy Han, Keke Zhang"
        duration="48h"
        optionname="Topic"
        optioncontent="Sustainability"
    />

    <div className="spacerL"></div>

    <UnderConstruction/>

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default Planty;
