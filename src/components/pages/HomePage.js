import React from 'react';

function HomePage() {

    return(
        <div className="home_page">
            <div className="home_page_info">
                My name is Justin Meimar, I'm a computing science student
                at the University of Alberta entering my third year. My interests
                include, Systems Programming, Learning about low-level computer concepts and 
                web development. The most interesting frotiers in CS for me at the moment are 
                highly scaled web services like AWS that can handle millions of requests per second,
                or Netlix which can stream 4k Video to millions of concurent users.

                My studies so far have been "breadth-first." I have learned from Computer Architecture, to Operating Systems, Databases and filesystem management, 
                Fundamental Data Structures and Algorithms, Computer Networking, Web Development, Android Development, Parallel and Distributed
                Systems.
                
                <br></br><br></br>
                Check out my projects in the projects tab, or my resume in the resume tab.
                Thanks!
            </div>   
           
        </div>     
    );
}

export default HomePage;