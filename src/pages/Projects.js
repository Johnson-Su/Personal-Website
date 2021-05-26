import Navbar from "../components/Navbar"
import Intro from "../components/MainPageComponents/Intro"
import Largecard from "../components/MainPageComponents/Largecard.js"
import Smallcard from "../components/MainPageComponents/Smallcard.js"
import Sayhi from "../components/MainPageComponents/Sayhi.js"
import Bottom from "../components/Bottom.js"

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom"

function Projects() {
  return (
    <>
    <Navbar location='Projects' />

    <Intro />
    {/* This container holds all project cards */}
    <div className="container-fluid">

      <p className="catch-eye mx-4">
        <b style={{color: '#651FFF'}}>Something catch your eye?</b> Click into any of the cards below to see a <b style={{color: '#651FFF'}}>much</b> more detailed writeup
      </p>

        
      {/* Large Showcase Card */}
      <div className="row justify-content-center mx-4">
        <div className="row">
          <Largecard
            status="// Ongoing Project"
            title="Pilly"
            description="Pill tracking application designed for those who need to manage medications for the elderly or the young"
            languages="Dart"
            tools="Flutter,Figma,Adobe Illustrator"
            imageName='pilly.png'
            imageMobile='mpilly.png'
          />
        </div>
        <div style={{height:'48px',width:'100%'}}></div>
      </div>
      
      {/* Smaller Showcase Cards */}
      <div className="row justify-content-center">
        <div className="row">
          <Smallcard
            status="// Personal Project"
            title="Steg Hide"
            description="Open source program for hiding and transporting information to areas of the world with censorship on knowledge"
            languages="C"
            tools="Steganography,Image Processing"
            imageName='msteghide.png'
          />
          <Smallcard
            status="// Hackathon Winner"
            title="EcoBlock"
            description="Sustainable & scalable POS blockchain and wallet with innovative green minting incentives"
            languages="Dart,Typescript,Python"
            tools="Node.js,Flutter,OCR,Firebase,Figma"
            imageName='mecoblock.png'
          />
        </div>
        <div style={{height:'0px',width:'100%'}}></div>

        <div className="row">
          <Smallcard
            status="// Hackathon Winner"
            title="Botanist"
            description="NLP powered no-code Discord Bot generator with a community expandable command library"
            languages="Javascript,Shell"
            tools="Discord.js,Figma,Google NLP"
            imageName='mbotanist.png'
          />
          <Smallcard
            status="// Hackathon"
            title="Vibe Check"
            description="Find the mood of your Spotify playlist and filter out songs that don’t match the mood"
            languages="Javascript,HTML5,CSS3"
            tools="Brain.js,Node.js,Spotify API,Heroku"
            imageName='mvibecheck.png'
          />
        </div>
        <div style={{height:'0px',width:'100%'}}></div>

        <div className="row">
          <Smallcard
            status="// Hackathon Winner"
            title="Certi-Chain"
            description="Blockchain powered solution to prevent the counterfeiting of products"
            languages="Python,HTML5,CSS3"
            tools="Flask,Jinja,Heroku"
            imageName='mcertichain.png'
          />
          <Smallcard
            status="// Hackathon Winner"
            title="Vaccurate"
            description="Data powered website for organizing COVID-19 vaccine distribution"
            languages="JavaScript,HTML5,CSS3"
            tools="Twilio,Figma,Firestore,Bootstrap"
            imageName='mvaccurate.png'
          />
        </div>
        <div style={{height:'0px',width:'100%'}}></div>

        <div className="row">
          <Smallcard
            status="// Hackathon"
            title="Planty"
            description="Chrome extension that suggest ingredient substitutes with lower carbon footprints for recipes"
            languages="Javascript,HTML5,CSS3"
            tools="Firebase,Browserify"
            imageName='mplanty.png'
          />
          <Smallcard
            status="// Hackathon Winner"
            title="Farmily"
            description="Connect farmers with excess produce to local consumers to reduce food waste due to COVID-19"
            languages="Javascript,HTML5,CSS3"
            tools="Firebase,Google Maps API, Node.js"
            imageName='mfarmily.png'
          />
      </div>
      <div style={{height:'0px',width:'100%'}}></div>

      <div className="row">
          <Smallcard
            status="// Personal Project"
            title="This Website"
            description="A collection of my projects, work experience, and info about me"
            languages="Javascript,HTML5,CSS3"
            tools="React.js,Bootstrap,Figma"
            imageName='mwebsite.png'
          />
          <Smallcard
            status="// Hackathon"
            title="DormBuddy"
            description="Virtual video calling app to emulate real life social interactions between students in dorms"
            languages="Typescript,Javascript,HTML5,CSS3"
            tools="Vue.js,Node.js,Bulma,Bootstrap,Firebase,Figma,N-app"
            imageName='mdormbuddy.png'
          />
      </div>
      <div style={{height:'0px',width:'100%'}}></div>

      <Sayhi />

      <Bottom />
      </div>
    </div>
    </>
  );
}

export default Projects;
