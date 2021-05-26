import Navbar from "../components/Navbar"
import Workcard from "../components/MainPageComponents/Workcard.js"
import Bottom from "../components/Bottom.js"
import Awards from "../components/MainPageComponents/Awards.js"

function Projects() {
  return (
    <>
    <Navbar location='Work' />

    <div className="spacerM mnone"></div>
    <div className="monly" style={{height:'48px',width:'100%'}}></div>

    <div className="row justify-content-center">

        <div className="row">
          <Workcard
            title="Project Manager Intern"
            time="Summer 2021"
            company="Interactive Media Lab"
            description="Managing software/hardware projects aimed to combat functional decline in aging populations at the University of Toronto"
            tools="TBA"
            linkPath="https://imedia.mie.utoronto.ca/"
          />
          <Workcard
            title="Software Engineer Intern"
            time="Winter 2021"
            company="Index Exchange"
            description="Lead development of a new centralized deployment UI, several automation pipelines, and standardized development processes"
            tools="Kubernetes,Ansible,Docker,Helm,GitLab"
            linkPath="https://www.indexexchange.com/"
          />
        </div>
        <div style={{height:'0px',width:'100%'}}></div>

        <div className="row">
          <Workcard
            title="Web Development Intern"
            time="Fall 2020"
            company="MediPaint"
            description="Redesigned the website improving user navigation, information architecture, aesthetics and lead online presence discussions. Done through Venture for Canada"
            tools="Figma,Wordpress,Elementor"
            linkPath="https://ventureforcanada.ca/programs/internship-program"
          />
          <Workcard
            title="Software Freelancer"
            time="All of 2020"
            company="FarmBot"
            description="Contributed to using OCR for smart plant recognition. Wrote documentation for a new education initiative and for the open source community"
            tools="Python,Pytorch,Jetson Nano"
            linkPath="https://farm.bot/"
          />
        </div>
    </div>
    <div className="spacerM"></div>

    <div className="row mx-4 justify-content-center">
        <Awards
            awards="
            2021|
            RU Hacks 2021 Winner-Top 5 overall-Wolfram Alpha award-The Codex award,
            HooHacks 2021 Winner-Best use of Google cloud,
            nwHacks 2021 Honorable Mention-Codex Pro Account
            |2020|
            Hack Western 2020 Winner-Best hardware hack,
            Deans List-Awarded for academic excellence,
            Hack The North East 2020 Mention-Top 10 machine learning hacks-Top 10 most viable startup hacks,
            RU Hacks 2020 Winner-2nd overall-Best Use of Google Cloud-Wolfram Alpha award
            |2019|
            Alexander Rutherford Scholarship,
            University of Toronto Entrance Scholarship,
            Best Delegate University of Chicago MUN"
        />
    </div>

    <div className="spacerL"></div>

    <Bottom />
    </>
  );
}

export default Projects;
