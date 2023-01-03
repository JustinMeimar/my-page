import React from 'react';
import {Link} from 'react-router-dom';

function ProjectsPage() {
    
    return(
        
        <div className="blog_page">
            
            <div className="blogs">
                <div className="blog_individual">
                    <div className="blog_title">
                        <Link to="/projects/gameoflife">Game of Life</Link>                        
                    </div>
                    
                    <div className="blog_date">June 24th 2021</div>
                </div>
                <br></br>
                <div className="blog_individual">
                    <div className="blog_title">
                        <Link to="/projects/algorithm">Algorithm Visualizer</Link>                        
                    </div>
                    
                    <div className="blog_date">January 18th 2022</div>
                </div>
                <br></br>
                <div className="blog_individual">
                    <div className="blog_title">
                        <a href="/algorithm">8-Bit CPU Assembler and Simulator</a>
                    </div>
                    
                    <div className="blog_date">May 1st 2022</div>
                </div>

            </div>
        </div>
    );
}

export default ProjectsPage;