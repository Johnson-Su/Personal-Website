import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import GenericText from "../../components/ProjectPageComponents/GenericText.js"
import DoubleImages from "../../components/ProjectPageComponents/DoubleImages.js"


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

    <div className="spacerM"></div>

    <GenericText
        title="What it does"
        content={
            <>
            <p>EcoBlock uses an alternative method of coin production that uses over <b>99% less energy</b> than cryptocurrencies such as Bitcoin and Ethereum. 
            Additionally, we utilize <b>optical character recognition</b> to reward coin miners/minters that use green energy to incentivise a move towards a cleaner, more sustainable blockchain.</p>
            <div className="row">
            <div style={{height:'24px',width:'100%'}}></div>
            <div className="col-md nopad">
                <p className="titlewidth"><b>Proof of Stake</b></p>
                <p className="titlewidth">EcoBlock uses a Proof of Stake system (POS) built using Typescript for coin distribution compared to the common Proof of Work system 
                (POW) that currencies such as Bitcoin use. POS rewards users for how many coins they hold (stake) while POW rewards users based on their computing power to solve math problems.</p>
            </div>
            <div className="col-md nopad">
                <p className="titlewidth"><b>Certified Clean Energy</b></p>
                <p className="titlewidth">EcoBlock rewards miners/minter for using certified 
                green energy sources through Google Cloud Vision to scan energy bills to determine is a mining/minting operation uses 
                certified clean energy to run their computers. If so, we reward them by increasing their adding a multiplier onto their balance when deciding who wins
                 a newly minted block.</p>
            </div>
            </div>
            </>
        }
    />

    <div className="spacerM"></div>

    <DoubleImages
        title="Feature Pictures"
        captions={["App running with DB in background",
        "Example of multiple blockchain nodes running"]}
        images={["EcoBlock/ecoblock5.png","EcoBlock/ecoblock3.png"]}
    />

    <DoubleImages
        title=""
        captions={["Figma design file screenshot",
        "Running the wallet app on a real phone"]}
        images={["EcoBlock/ecoblock4.png","EcoBlock/ecoblock6.png"]}
    />

    <div className="spacerM"></div>

    <GenericText
        title="Technical Details"
        content={
            <>
            <p>
              The EcoBlock POS blockchain was made using <b>Typescript</b> and <b>Node.js</b> and is a implementation of <a href="https://github.com/lhartikk/naivecoin" className="link" target="_blank"><span>NaiveCoin</span></a>.
              The blockchain has testing tools and a CLI (command line interface) made with <b>Python</b>. 
              For determining if person use was using eco-friendly energy we used the <b>Google Cloud Vision API</b> which we implemented using a <b>REST API</b>.
              Also, a <b>Google Firebase database</b> to store non-sensitive information related to EcoBlock users. The frontend was drafted and prototyped with <b>Figma</b> and implemented using the <b>Flutter</b> framework for <b>Dart</b>.
            </p>
            </>
        }
    />

    <div className="spacerM"></div>

    <GenericText
        title="Reflection"
        content={
            <>
            <p>I'm really proud of how this project turned out especially given the short amount of time we had to complete it. 
              Little did we know that <b>after our project was done large figures like Elon Musk would come out to criticize the energy
               usage of Bitcoin</b> bringing the problem to the general public's eye so it was definitely satisfying knowing <b>we were ahead of the game on this one</b>.
            </p>
            <div style={{height:'24px',width:'100%'}}></div>
            <p>In the technical side I was able to learn lots about <b>proof of stake blockchains</b>, <b>REST API's</b>, and <b>mobile app design</b> in such a short time span and actually implement it!
              I also got to get a better feel for working under a time crunch especially when it came <b>understanding how to prioritize features</b>, communicating with team members, and testing and debugging.
              I hope that if we pick up this project again we can work on the security and also deploy a working mainnet that others can really use.
            </p>
            </>
        }
    />

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default EcoBlock;
