import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import About from "./pages/About"

import TopScroll from './TopScroll.js'

import Pilly from "./pages/ProjectFolder/Pilly"
import StegHide from "./pages/ProjectFolder/StegHide"
import EcoBlock from "./pages/ProjectFolder/EcoBlock"
import Botanist from "./pages/ProjectFolder/Botanist"
import VibeCheck from "./pages/ProjectFolder/VibeCheck"
import CertiChain from "./pages/ProjectFolder/CertiChain"
import Vaccurate from "./pages/ProjectFolder/Vaccurate"
import Planty from "./pages/ProjectFolder/Planty"
import Farmily from "./pages/ProjectFolder/Farmily"
import ThisWebsite from "./pages/ProjectFolder/ThisWebsite"
import DormBuddy from "./pages/ProjectFolder/DormBuddy"

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <TopScroll>
      <Switch>

        {/* main pages */}
        <Route exact path="/">
          <Projects />
        </Route>

        <Route exact path="/experience">
          <Experience />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        {/* project pages */}
        <Route exact path="/pilly">
          <Pilly />
        </Route>
        <Route exact path="/steghide">
          <StegHide />
        </Route>
        <Route exact path="/ecoblock">
          <EcoBlock />
        </Route>
        <Route exact path="/botanist">
          <Botanist />
        </Route>
        <Route exact path="/vibecheck">
          <VibeCheck />
        </Route>
        <Route exact path="/certi-chain">
          <CertiChain />
        </Route>
        <Route exact path="/vaccurate">
          <Vaccurate />
        </Route>
        <Route exact path="/planty">
          <Planty />
        </Route>
        <Route exact path="/farmily">
          <Farmily />
        </Route>
        <Route exact path="/thiswebsite">
          <ThisWebsite />
        </Route>
        <Route exact path="/dormbuddy">
          <DormBuddy />
        </Route>
      </Switch>
      </TopScroll>
    </Router>
  );
}

export default App;
