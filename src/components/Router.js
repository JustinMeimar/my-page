import {HashRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from "./pages/HomePage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import AlgorithmSetup from './projects/algorithms/AlgorithmSetup';

function MainRouter() {
  return (
    <Router basename="/">
      <div className="App">
     
        <div className="AppNav">
          <Link to="/">Home </Link> 
          <Link to="/projects">Projects </Link>
          <Link to="/resume">Resume</Link>
        </div> 
        <br></br>
        <div className="AppRoutes">
          <Route exact path="/" component={HomePage}/> 
          <Route exact path="/projects" component={ProjectsPage}></Route>
          <Route exact path="/projects/algorithm" component={AlgorithmSetup}></Route>
        </div> 
      </div>
    </Router>    
    
  );
}

export default MainRouter;
