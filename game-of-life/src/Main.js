import React, { useState, useEffect } from 'react'
import Grid from './Grid.js'

function Main() {

const speed = 100
const rows = 30
const cols = 50 

const [ generation, setGeneration ] = useState(0)
const [ gridFull, setGridFull ] = useState(Array(rows).fill().map(() => Array(cols).fill(false)))

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}

const selectBox = (row, col) => {
    let gridCopy = arrayClone(gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    setGridFull(gridCopy)
}

const seed = () => {
    let gridCopy = arrayClone(gridFull);
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            if (Math.floor(Math.random() * 4) === 1){
                gridCopy[i][j] = true;
            }

        }
    }
    setGridFull(gridCopy)
}

useEffect(() => {
    seed()
}, [])
   

    
   return(
        <div>
            <h1>The Game of Life</h1>
            <Grid gridFull={gridFull} rows ={rows} cols={cols} selectBox={selectBox}/>
            <h2>Generations: {generation}</h2>
        </div>
    )
}

export default Main