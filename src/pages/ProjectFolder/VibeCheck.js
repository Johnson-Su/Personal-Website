import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import UnderConstruction from "../../components/ProjectPageComponents/UnderConstruction.js"


function VibeCheck() {
  return (
    <>
    <Navbar/>
    <div className="spacerM mnone"></div>
    <div style={{height:'32px',width:'100%'}}></div>

    <Overview
        status="Hackathon Project"
        title="Vibe Check"
        desc="Find the mood of your Spotify playlist and filter out songs that don’t match the mood"
        copyright=""
        links={["Devpost|https://devpost.com/software/vibe-check-q93jaz","GitHub|https://github.com/Johnson-Su/vibe-check","Website|https://vibe-check-htne.herokuapp.com/"]}
        image="mvibecheck.png"
        style={{backgroundColor: '#F26738', borderRadius: '12px'}}
    />

    <div className="spacerM"></div>

    <Probsol
        problem="I want to keep the vibe going when I’m listening to music and don’t want songs which breaks my mood"
        solution="Allow people to identify the genre or “vibe” of their playlists and let them easily remove songs that could break the mood"
        tools="Javascript, HTML5, CSS3, Brain.js, Heroku, Node.js, Spotify Web API, Illustrator, Figma"
        team="Amy Han, Andrew Yu"
        duration="36h"
        optionname="Topic"
        optioncontent="Music & Data"
    />

    <div className="spacerL"></div>

    <UnderConstruction/>

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default VibeCheck;
