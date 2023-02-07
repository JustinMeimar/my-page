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
            a compiler for a vector languge which targets LLVM and a virtual CPU + assembler for 
            a small toy ISA. I have some other stuff pinned on my GitHub. My primary love is for C++ 
            at the moment.   

            <br></br> <br></br>
            I learned alot about the fundamentals of computers by implementing some of the suggested <a href='https://github.com/geohot/fromthetransistor' target='_blank'> 
            this Github blog</a>, which I'm continuting to let guide my exploration.   
           
           
            <br></br> <br></br>
            Besides an interest in low-level, I have experience with modern 
            tools in software development. I became close with Git 
            working in multiple group projects ranging from 4 - 6 people. 
            I'm familiar wth React after using it in a frontend for some 
            simple CRUD apps (as well as this site) And proper database 
            management theory from some CS classes, as well as skills from
            my last internship. 
            
            <br></br> <br></br>
            Last summer, I gained some real world experience working as a Full Stack 
            at a <a href="https://bitsinglass.com/" target='_blank'>Bits In Glass</a>
            , a local Edmonton company. There I learned the ropes of AGILE devleopment,
            where we operated in two-week sprints. I helped my team in producing multiple iterations over the
            application while during my time. 
            
            <br></br> <br></br>
            Outside of computers, I enjoy reading, running and playing sports like hockey
            and soccer. This is my   
            <a href="https://www.goodreads.com/user/show/137002609-justin-meimar" 
                target='_blank' > GoodReads</a> profile, though if im in school my 
                book completion rate falls enormously.
            </div>    
        </div>     
    );
}

export default HomePage;