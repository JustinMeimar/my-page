import {React, useRef, useEffect, useState} from 'react';
import {XTerm} from 'xterm-for-react';
import './ProjectsPage.css'

/* Plan:
    Decisions to make:
        - To use XTerm as a view and model or just a view from 
        which we grab text, exectute the input in a differnt VM, 
        then write back to XTerm.
        
        - How to set up the environment to exectute C++ programs
            - clean
            - build
            - make
            - run
    
    Done:
        write text
    Todo:
        erase text
        read text
*/ 

function ProjectsPage() {

    const xTermRef = useRef();
    const terminal_msg = "justin@website:~$ " 
    const [terminal, setTerminal] = useState([]);
        
    //set inital terminal message
    useEffect(() => {
        xTermRef.current.terminal.reset();
        xTermRef.current.terminal.write(terminal_msg); 
    })

    let written = 0; 

    const onKeyPressed = (event) => {
        console.log(written);
        if (event.domEvent.key == "Enter") {
            xTermRef.current.terminal.write("\r\n" + terminal_msg); 
            written = 0;
        } 
        else if (event.domEvent.key == "Backspace") {
            if (written > 0) {
                xTermRef.current.terminal.write('\b');
                xTermRef.current.terminal.write(' ');
                xTermRef.current.terminal.write('\b');
                written-=1;
            } 
        }
        else {
            xTermRef.current.terminal.write(event.domEvent.key); 
            written+=1
        }
    }

    return( 
        <div className="project_page"> 
            <div className="terminal_div">
                <XTerm
                    className="terminal"
                    options={{
                        cursorBlink: true,
                        disableStdin: false
                    }}
                    onKey={(e) => onKeyPressed(e)}
                    ref={xTermRef}
                />
            </div> 
        </div>
    );
}

export default ProjectsPage;