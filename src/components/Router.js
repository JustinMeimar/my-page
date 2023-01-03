import {HashRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from "./pages/HomePage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import AlgorithmSetup from './projects/algorithms/AlgorithmSetup';
import GameOfLifeSetup from './projects/gol/GameOfLifeSetup.js';
import ResumePDF from '../static/Resume.pdf'

function MainRouter() {
  return (
    <Router basename="/">
      <div className="App"> 
        <div className="AppNav">
          <Link to="/">Home </Link> 
          <Link to="/projects">Projects </Link>
          <a href={ResumePDF} 
                target="_blank" rel="noopener noreferrer">Resume
          </a>
        </div> 
        <br></br>
        <div className="AppRoutes">
          <Route exact path="/" component={HomePage}/> 
          <Route exact path="/projects" component={ProjectsPage}></Route>
          <Route exact path="/projects/algorithm" component={AlgorithmSetup}></Route>
          <Route exact path="/projects/gameoflife" component={GameOfLifeSetup}></Route>
        </div> 
      </div>
    </Router>     
  );
}

export default MainRouter;