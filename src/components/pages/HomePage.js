import React from 'react';
import './HomePage.css' 
function HomePage() {

    return(
        <div className="home_page"> 
            <div className="home_page_info">
            Hello, I’m Justin, a third year computer science student at 
            <a href="https://www.ualberta.ca/computing-science/index.html"> the University of Alberta </a>  

            <br></br> <br></br> 
            I enjoy implementing low level programs and concepts. A couple of my projects include 
            a compiler for a vector language which targets LLVM IR (team of 4), and a virtual CPU + assembler for 
            a custom toy ISA. 
            
            <br></br> <br></br>
            These, along with others, are pinned on my GitHub, however, since no one enjoys clicking through 
            the source files of a github repo, the <a href="./projects#/projects">projects</a> page will soon have a loaded up terminal to 
            run my programs in the browser.  
            
            <br></br> <br></br>
            Revealing detail: my primary love is for C++ at the moment.   

            <br></br> <br></br>
            I learned the fundamentals by implementing some of the suggested projects in    
            <a href='https://github.com/geohot/fromthetransistor' target='_blank'>  this Github blog</a>, 
            which I'm continuing to let guide my exploration.   
           
           
            <br></br> <br></br>
            Beside low-level programming, I have experience with modern 
            tools. I've become close with Git by
            working in group projects ranging from 4-6 people. 
            
            <br></br> <br></br>
            I'm in a continual loop of learning React. It always seems to find a 
            use case (including this website :p). Thankfully JavaScript is going nowhere, 
            so I can get comfortable in this loop that will continue 
            to branch unconditionally.  
            
            <br></br> <br></br>
            Last summer, I gained some real world experience working as a Full Stack 
            at a <a href="https://bitsinglass.com/" target='_blank'>Bits In Glass</a>
            , a local Edmonton company. There I learned the ropes of AGILE development,
            where we operated in two-week sprints. I helped my team in producing multiple 
            iterations over the application while during my time. 
            
            <br></br> <br></br>
            At BIG, I was also able to 
            bridge the theoretical database knowledge I learned in my classes into a practical skill base.
            
            <br></br> <br></br>
            Outside of computers, I enjoy reading, running and playing sports like hockey
            and soccer. This is my   
            <a href="https://www.goodreads.com/user/show/137002609-justin-meimar" 
                target='_blank' > GoodReads</a> profile, though if I'm in school my 
                book completion rate falls enormously.
            </div>   
        </div>     
    );
}

export default HomePage;