import React from 'react';
import './style.css'

function GenerateCells() {
  const cellsInRow = 100;
  const cellsInCol = 100; 

  var cells = [];
  for (var i = 1; i <= cellsInRow; i++) {
    for (var j = 1; j <= cellsInCol; j++) {
      cells.push({ row: i, col: j, color: 'white' });
    }
  }
  return cells;
}

function GameOfLifeSetup() {
  // Function to initialize the cells to random colors
  const initRandom = cells => {
    cells.forEach(cell => {
      cell.color = Math.random() < 0.5 ? 'black' : 'white';
    });
  };

  return (
    <div className="project_setup"> 
      <div className="title">
        The Game of Life
      </div>
      <button onClick={() => initRandom(cells)}>Initialize Random</button>
      <div className="gridContainer">
        <div className="grid">
          {cells.map(cell => (
            <Cell key={`${cell.row}${cell.col}`} {...cell} />
          ))}
        </div>
      </div> 
    </div>     
  );
}

function Cell({ row, col, color, setColor }) {
  const [currentColor, setCurrentColor] = React.useState(color);

  const handleClick = () => {
    setCurrentColor(currentColor === 'black' ? 'white' : 'black');
  };

  return (
    <div className="Cell" onClick={handleClick} style={{ backgroundColor: currentColor }}>
    </div>
  );
}

const cells = GenerateCells();

export default GameOfLifeSetup;