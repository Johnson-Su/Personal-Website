import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import GenericText from "../../components/ProjectPageComponents/GenericText.js"
import DoubleImages from "../../components/ProjectPageComponents/DoubleImages.js"


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

<div className="spacerM"></div>

<GenericText
    title="What it does"
    content={
        <>
        <p>
          Botnaist is Discord bot that functions as <b>code-free custom Discord bot generator</b>. It uses <b>Google Cloud NLP to analyze user requests</b> and translates
          them into commands that can be found in an database containing <b>command modules submitted by the community</b> which are submitted through Botanist. 
          These code blocks are compiled and returned as a custom bot with a included script to install all dependencies. 
        </p>
        <div style={{height:'24px',width:'100%'}}></div>
        <p>
          <b>The steps to a custom bot are incredibly simple</b>. The user simply needs to create a Discord dev account, invite Botanist to their server,
          get a token and id from Discord, run 3 simple commands, and finally download the newly made custom bot and double click on the included script.
          <b> After these 5 steps your custom bot is ready to be invited to any server!</b> 
        </p>
        </>
    }
/>

<div className="spacerM"></div>

<DoubleImages
    title="Feature Pictures"
    captions={["Creating a new bot channel made by '-plant",
    "Finished  custom bot messages"]}
    images={["Botanist/botanist1.png","Botanist/botanist2.png"]}
/>

<DoubleImages
    title=""
    captions={["Uploading your own command modules with '-branch",
    "Working custom bot generated by Botanist"]}
    images={["Botanist/botanist3.png","Botanist/botanist4.png"]}
/>

<div className="spacerM"></div>

<GenericText
        title="Technical Details"
        content={
            <>
            <p>
              Botanist was made with <b>Discord.js</b> which is Discord's <b>Javascript</b> module and interacts with a <b>Firebase database</b>. 
              Botanist uses <b>Google Cloud NLP</b> to analyze user requests and get keywords and features which is what it uses to search for usable modules stored in the database.
              Also, the server side code for Botanist is run on a <b>Jetson Nano</b> to ensure that it is up 24h a day. 
            </p>
            </>
        }
    />

<div className="spacerM"></div>

<GenericText
    title="Reflection"
    content={
        <>
        <p>
          This project was a rare occurrence because <b>all the core features were developed within the 48h timespan</b> without sacrificing sleep (which I thoroughly enjoyed).
           Even though we had a group member leave before the project started and only had two developers for a 4 person hackathon <b>we placed top 5 out of 143 projects</b> and was overall best Discord bot.
           I felt that the "magic sauce" that let us perform so well this time was the amazing documentation that Discord.js has and it really came to show the <b>positive impact a well documented tool</b> can have on a team's efficiency.
        </p>
        <div style={{height:'24px',width:'100%'}}></div>
        <p>
          In this project not only did I gain a newfound appreciation for good documentation but I also got a much <b>better understanding of async functions and promises</b> overall.
          The concept had eluded me for past hackathons leading to really hacky code but this time I was able to finally properly utilize the concepts!
          Implementing a no-code solution also gave me a better insight into the importance of well made interactions and how <b>NLP can be used to "humanize" interactions with software</b>.
        </p>
        </>
    }
/>

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default Botanist;
