import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import MultipleImages from "../../components/ProjectPageComponents/MultipleImages.js"
import GenericText from "../../components/ProjectPageComponents/GenericText.js"

function Pilly() {
  return (
    <>
    <Navbar/>
    <div className="spacerM mnone"></div>
    <div style={{height:'32px',width:'100%'}}></div>

    <Overview
        status="Ongoing Personal Project"
        title="Pilly"
        desc="Pill tracking application designed for those who need to manage medications for the elderly or the young"
        copyright="© 2021, Johnson Su. All rights reserved."
        links={[]}
        image="mpilly.png"
        style={{backgroundColor: '#D6BDFF', borderRadius: '12px'}}
    />

    <div className="spacerM"></div>

    <Probsol
        problem="How can I help manage and edit my parent or child's medications when I'm not around?"
        solution="An application that allows you to remotely view and edit your dependent's medications and monitor their progress"
        tools="Dart, Flutter, Figma, and Adobe Illustrator"
        team="Solo project"
        duration="Ongoing"
        optionname="Topic"
        optioncontent="Health and Wellness"
    />

    <div className="spacerM"></div> 

    <MultipleImages
        title="App Preview"
        captions={[]}
        images={["Pilly/preview1.png","Pilly/preview2.png"]}
    />

    <div className="spacerM"></div>

    <GenericText
        title="Product Management Summary"
        content={
            <>
            <div className="row">
                <div className="col-md nopad">
                    <p className="titlewidth"><b>Competitive analysis</b></p>
                    <p className="titlewidth">Many of the most used pill tracking apps have lots of functionality but lack in terms of their UI/UX design leading to a cumbersome experience when accessing certain features</p>
                </div>
                <div className="col-md nopad">
                    <p className="titlewidth"><b>People problems</b></p>
                    <p className="titlewidth">What this app aims to solve is the difficulty of setting up and editing a pill routine, finding where certain features are, and the sharing of medical information to caretakers</p>
                </div>
            </div>
            <div style={{height:'24px',width:'100%'}}></div>
            <div className="row">
                <div className="col-md nopad">
                    <p className="titlewidth"><b>Business opportunity</b></p>
                    <p className="titlewidth">The project differentiator is letting the app be set up remotely by a caretaker and implement restrictions on editing pill regimens to reduce accidental changes to medication reminders</p>
                </div>
                <div className="col-md nopad">
                    <p className="titlewidth"><b>Metrics</b></p>
                    <p className="titlewidth">App downloads, decreasing time spent on the app, user retention, weekly/monthly active users, screen flow, and return on investment</p>
                </div>
            </div>
            <div style={{height:'24px',width:'100%'}}></div>
            <div className="row">
                <div className="col-md nopad">
                    <p className="titlewidth"><b>Risks</b></p>
                    <p className="titlewidth">Legal responsibility from app misuse and time availability to code and test the app</p>
                </div>
                <div className="col-md nopad">
                    <p className="titlewidth"><b>Initial goal</b></p>
                    <p className="titlewidth">Achieve over 100k downloads on the app store within a one year period</p>
                </div>
            </div> 
            </>
        }
    />

    <div className="spacerM"></div>

    <MultipleImages
        title="UI/UX Design Process"
        captions={["Looked cool but too many elements weren't intuitive such as the weekly reliability graphic",
        "Better, but this design is outdated and relies on cards and boxes too much",
        "Moved away from cards and made information easier to find and cleaner this is the final version the app will be based on"]}
        images={["Pilly/ux1.png","Pilly/ux2.png","Pilly/preview1.png"]}
    />

    <div className="spacerM"></div>

    <GenericText
        title="Coding it up"
        content={
        <p>I am currently writing the code for the Flutter app however, <b>it will not be available on Github due to the nature of this project</b>.
         I will be updating this section periodically in the future to comment on my experiences for this project.
        If you are an potential employer I will be able to share snippets of code upon <a class="bold link" href = "mailto: johnsonn.su@mail.utoronto.ca">request</a>.</p>
        }
    />

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default Pilly;
