import React from 'react';
import './HomePage.css' 
function HomePage() {

    return(
        <div className="home_page"> 
            <div className="home_page_info">
                Hello, I'm Justin, a third year computer science student at the University of Alberta.
                Check out my <a>GitHub</a> so see my perosonal projects.

                <br></br>
                <br></br>
                Programming in my free time, I have found a great deal of satisfaction from reinventing the wheel.
                That is to say, I enjoy taking fundamental CS concepts and seeing if I can 
                build a viable implementation from scratch. 
                
                Some of my re-inventions include a machine agnostic compiler (LLVM :D), 
                a virtual CPU and an assembler for a custom assembly language.  
                 
                <br></br>
                <br></br>
                I aim to complete the projects described from  
                <a href="https://github.com/geohot/fromthetransistor" target="_blank"> This Github Blog</a>
                , written by a programmer I admire. The goal is to learn the software stack from 
                first principles, all the way from "the transistor to the web browser." The premise is that 
                modern development builds upon so many layers of abstraction above the physical 
                computation layer that the fundamentals are easily forgotten if not lost. 
                
                <br></br> 
                <br></br> 
                To give credit to the development of CS where it is due, if we never abstracted from 
                assembly into C, or made libraries and software stacks, this paragraph might take me much longer to write. 
                Nonetheless, I still don't enjoy writting code with the feeling of a black 
                void beneath my feet, so I will continue to demistify the innumerable 
                black boxes of computing until I can see the ground. (And everything in between. ^_^) 
                
 
                <br></br>
                <br></br>
                Besides my love for low-level, I have some experience with popular tools in modern
                software. I've worked on a number of group projects with Git,  
                this website is written in React JS, I have experience with DBMS like
                MongoDB & MariaDB and was an intern at <a>B.I.G</a>, a local company in Edmonton,
                where I did Full Stack for a summer.  
                
                   
            </div>   
           
        </div>     
    );
}

export default HomePage;