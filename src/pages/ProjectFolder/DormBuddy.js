import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import UnderConstruction from "../../components/ProjectPageComponents/UnderConstruction.js"


function DormBuddy() {
  return (
    <>
    <Navbar/>
    <div className="spacerM mnone"></div>
    <div style={{height:'32px',width:'100%'}}></div>

    <Overview
        status="Hackathon Project"
        title="DormBuddy"
        desc="Virtual video calling app to emulate real life social interactions between students in dorms"
        copyright=""
        links={["Devpost|https://devpost.com/software/dormbuddy","GitHub|https://github.com/BenjaminSao/DormBuddies"]}
        image="mdormbuddy.png"
        style={{backgroundColor: '#FFEFD4', borderRadius: '12px'}}
    />

    <div className="spacerM"></div>

    <Probsol
        problem="I want interact with friends online in a more immersive way"
        solution="Develop a web app that allows for video calling, virtual rooms, and text chats"
        tools="Typescript, Javascript, HTML5, CSS3, Vue.js. Node.js, Bulma, Bootstrap, Firebase, Figma, N-app"
        team="Vincent Li, Scott Jiang, Amy Han, Benjamin Saobuppha"
        duration="24h"
        optionname="Topic"
        optioncontent="Online Interaction"
    />

    <div className="spacerL"></div>

    <UnderConstruction/>

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default DormBuddy;
