import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import UnderConstruction from "../../components/ProjectPageComponents/UnderConstruction.js"


function ThisWebsite() {
  return (
    <>
    <Navbar/>
    <div className="spacerM mnone"></div>
    <div style={{height:'32px',width:'100%'}}></div>

    <Overview
        status="Personal Project"
        title="This Website"
        desc="Connect farmers with excess produce to local consumers to reduce food waste due to COVID-19"
        copyright="© 2021, Johnson Su. All rights reserved"
        links={[]}
        image="mwebsite.png"
        style={{backgroundColor: '#E4E4E4', borderRadius: '12px'}}
    />

    <div className="spacerL"></div>

    <UnderConstruction/>

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default ThisWebsite;
