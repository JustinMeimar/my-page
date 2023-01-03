import React, {useState} from 'react'
import './style.css'

function initRegisters() {
    var init8Reg = [0,0,0,0,0,0,0,0];   
}

class BTree {
    constructor() {
        this.root = null
        this.curCapacity = 0
    }

    insert (idx) {
        if (this.curCapacity == 0) {
            const leaf = new LeafNode(idx)
            this.root = leaf 
        } else {
            

        }
        
    }

}

class InternalNode {
    constructor (capacity) {
        this.capacity = capacity
        this.curCapacity = 0
        this.indexes = []
        this.children = []
    }
    
    insert(idx) {

    }
}

class LeafNode { 
    constructor(capacity) {
        this.capacity = capacity;
        this.curCapacity = 0;
        this.indexes = [];
    }
    
    insert(idx) { 
        this.indexes.push(idx);
        this.curCapacity += 1;
    }
}

function drawNode(node) {
    let nodeString = '';
         
    for (var i = 0; i < node.curCapacity; i++ ) {
        nodeString += ( node.indexes[i] + "*") 
        if ( i != node.curCapacity - 1) {
            nodeString += " "
        }
    }

    console.log(nodeString)

    return(
        <div className="node">
            {nodeString}
        </div>
    );
}

function drawButtons() {
    return (
        <div className="golButtons">
            <button>Add Index</button>
        </div>
    );
}
function Test() {
    const tree = new BTree();
    const leaf = new LeafNode(3); 
    leaf.insert(1);
    leaf.insert(4);
    leaf.insert(6);

    return(
        <div className="project_setup"> 
            <canvas height="300" width="300"> </canvas>
            { drawButtons() }
            { drawNode(leaf) }
        </div>     
    );
}

export default Test;