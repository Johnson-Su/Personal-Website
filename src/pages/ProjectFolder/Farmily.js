import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import UnderConstruction from "../../components/ProjectPageComponents/UnderConstruction.js"


function Farmily() {
  return (
    <>
    <Navbar/>
    <div className="spacerM mnone"></div>
    <div style={{height:'32px',width:'100%'}}></div>

    <Overview
        status="Hackathon Winner"
        title="Farmily"
        desc="Connect farmers with excess produce to local consumers to reduce food waste due to COVID-19"
        copyright=""
        links={["Devpost|https://devpost.com/software/farmily-q3gop8","GitHub|https://github.com/Johnson-Su/Cow-Town-Coders"]}
        image="mfarmily.png"
        style={{backgroundColor: '#2A363B', borderRadius: '12px'}}
    />

    <div className="spacerM"></div>

    <Probsol
        problem="I want to reduce the amount of COVID-19 food waste by redistributing surplus to those who need it"
        solution="Allow people to purchase food directly from local farms with extra product through an online marketplace"
        tools="Javascript, HTML5, CSS3, Firebase, Google Maps API, Node.js"
        team="Amy Han, Keke Zhang"
        duration="36h"
        optionname="Topic"
        optioncontent="Sustainability & COVID-19"
    />

    <div className="spacerL"></div>

    <UnderConstruction/>

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default Farmily;
