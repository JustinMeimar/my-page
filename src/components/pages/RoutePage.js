import React from 'react';
import HomePage from './HomePage.js';
import ProjectsPage from './ProjectsPage.js';
import ResumePage from './ResumePage.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AlgorithmSetup from '../projects/algorithms/AlgorithmSetup.js';

function RoutePage() {
    return(
        <div> 
            <div>
                <Router>
                    <Switch>
                        {/*Main Routes*/}
                        <Route exact path="/my-page/">
                            <HomePage></HomePage>
                        </Route> 

                        <Route exact path="/my-page/projects">
                            <ProjectsPage></ProjectsPage> 
                        </Route>

                        <Route exact path="/my-page/resume">
                            <ResumePage></ResumePage>
                        </Route>
                        {/*Project Routes*/}
                        <Route path="my-page/algorithm">
                            <AlgorithmSetup></AlgorithmSetup>
                        </Route>
                    </Switch> 
                </Router>
            </div>
        </div>
    )
}

export default RoutePage;