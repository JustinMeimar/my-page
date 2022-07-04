import React, {useState, useEffect} from 'react';
import './css/Grid.css';
import Buttons from './Buttons.js';

const Cell = (props) => {

    const active = "rgb(0,0,0)";
    const inactive = "rgb(255,255,255)";

    const [activeRGB, setActiveRGB] = useState(inactive);
    
    const handleMouseEnter = () => {
        
        var currentCell = queryCell(props.coord)[0];
        //console.log(currentCell); 
        
    };

    return(
   
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
            {/* {props.state} */}
        </div>
    );
}

function queryCell(className){ 
    var q = document.getElementsByClassName(className);
    return q
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
                <Buttons></Buttons>                 
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