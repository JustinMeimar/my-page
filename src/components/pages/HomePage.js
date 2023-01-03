import React from 'react';
import './HomePage.css' 
function HomePage() {

    return(
        <div className="home_page"> 
            <div className="home_page_info">
            Hello, I’m Justin, a third year computer science student at 
            <a href="https://www.ualberta.ca/computing-science/index.html"> the University of Alberta </a> 
            who has a passion for programming and building projects from scratch. 
           
            <br></br> <br></br> 
            I enjoy implementing low level programs and concepts. Some of my projects include 
            a machine agnostic compiler, a virtual CPU, and an assembler for a custom ISA. I'm 
            currently working on completing the projects described in 
            <a href='https://github.com/geohot/fromthetransistor' target='_blank'> 
            this Github blog</a>, 
            which aims to teach the software stack from the ground up.
            
            <br></br> <br></br>
            I believe that modern development relies on so many layers of abstraction that it's easy 
            to lose sight of the fundamentals, so I enjoy demystifying the black boxes of computing. 
            
            <br></br> <br></br>
            In addition to an interest in low-level programming, I have experience with popular 
            tools in modern software development, such as Git, React JS, and databases like 
            MongoDB and MariaDB. Last summer, I gained some real world experience working as a Full Stack 
            intern at a <a href="https://bitsinglass.com/" target='_blank'>Bits In Glass</a>
            , a local Edmonton company.
            
            <br></br> <br></br>
            Outside of computers, I enjoy reading and running. My 
            <a href="https://www.goodreads.com/user/show/137002609-justin-meimar"
                target='_blank' >
                GoodReads</a> link. 
            </div>    
        </div>     
    );
}

export default HomePage;