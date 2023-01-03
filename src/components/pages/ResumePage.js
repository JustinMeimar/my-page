import React from 'react';
import {Document, Page } from 'react-pdf';

import myPdf from 'process.env.PUBLIC_URL/Resume.pdf';


function ResumePage() {
    
    // console.log("reusme obj", resumePDF)
    return(
        <div className="resume_page">
            <div className="resume_page_info">
            <a href={process.env.PUBLIC_URL + './Resume.pdf'} target="_blank" rel="noopener noreferrer">Here</a>
            <br></br>
            <img src='/logo192.png'></img>
            </div>  
        </div>
     
    );
}

export default ResumePage;