import React, {useState, useEffect} from 'react';
import './css/Grid.css';

const Cell = (props) => {

    const active = "rgb(0,0,0)";
    const inactive = "rgb(255,255,255)";

    const [activeRGB, setActiveRGB] = useState(inactive); 

    const handleMouseEnter = () => { 
        
    };

    return ( 
        <div      
            className={props.coord}
            onClick={()=> setActiveRGB(activeRGB === active ? inactive : active)}
            onMouseEnter={handleMouseEnter} 
            style={ 
                {
                    width: 30,
                    height: 30,
                    positioin: 'relative', 
                    border: '1px solid black',
                    backgroundColor: activeRGB
                }
            } 
        >
        </div>
    );
}

function queryCell(className){ 
    var q = document.getElementsByClassName(className);
    return q
}

function renderButtons() {

    function doStart() {
        console.log("do Start");
    }
    function doStop()  {
        console.log("do Stop");
    }
    function doReset() {
        console.log("do Reset");
    }

    return(
        <div className="myButtons">
           <button onClick={doStart}> Start</button> 
           <button onClick={doStop}> Stop</button>
           <button onClick={doReset}> Reset</button>
        </div>
    );
}

function Grid() {
     
    var numRows = 26;
    var numCols = 26; 
    var grid = [];
    
    for (var i = 0; i<numRows; i++){
        var row = [] 
        for (var j =0; j<numCols; j++){
            row.push((i,j));
        }  
        grid.push(row)
    }  
    return(
        <div className="algorithms-dijkstra">
            <div className="algorithm-dijkstra-header">
                { renderButtons() } 
            </div>
            <div className="algorithm-dijkstra-main">
            {grid.map((row, i) => 
                    row.map((j) => ( 
                        <Cell key={`${i}-${j}`} coord={`${i}-${j}`}></Cell>
                    )) 
            )}
            </div> 
        </div>

    );
}

export default Grid;