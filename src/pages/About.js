import Navbar from "../components/Navbar"
import Aboutme from "../components/MainPageComponents/Aboutme.js"
import Bottom from "../components/Bottom.js"
import IframeResizer from 'iframe-resizer-react'

function About() {
  return (
    <>
    <script async src="https://snapwidget.com/js/snapwidget.js"></script>
    <Navbar location='About' />

    <div className="spacerM mnone"></div>
    <div className="monly" style={{height:'48px',width:'100%'}}></div>
    
    <Aboutme
      title="Get to know me :)"
      content1={
      <p>Currently, I'm interested in <b>product & project management</b>, <b>blockchain</b>, <b>DevOps</b>, and <b>UX design</b>. 
      You can catch me doing <b>Hackathons</b>, personal projects, LeetCode, and applying to (lots of) jobs!</p>
      }

      content2={
      <p>I'm from Calgary (Yeehaw!) and am pursuing a bachelors in 
      <b> Computer Science with a Specialization in Software Engineering</b> at the <a href="https://www.utoronto.ca/" className="link" target="_blank"><span>University of Toronto</span></a>. 
      In my free time I enjoy getting new foods with friends, playing games, reading mangas, and going on challenging hikes!
      </p>
      }
    />

    <div className="spacerM"></div>

    <div className="row justify-content-center mx-4" >
      <div className="row bound" style={{width:'100%'}}>
        <IframeResizer
          log
          src="https://snapwidget.com/embed/844504"
          style={{ width: '1px', minWidth: '100%', border:'none'}}
        />
      </div>
    </div>
    
    <div className="spacerL"></div>

    <Bottom />

    </>
  );
}

export default About;
