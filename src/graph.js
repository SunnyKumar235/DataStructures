// const graph = [[0, 2], [2, 3], [2, 1], [3, 1]];

// const grapth = [[2], [2, 3], [0, 3, 1], [1, 2]];

// const grapth = [
//     [0, 0, 1, 0],
//     [0, 0, 1, 1],
//     [1, 1, 0, 1],
//     [0, 1, 1, 0]
// ]


// Grapth are cyclic,  Acyclic , weighted , unWeighted , directional , un directional and some others.
class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList ={};
    }
    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes = 0;

    }
    addEdges(node1, node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);

        //undirected

    }
    showConnections(){

    }

}

const myGrapth = new Graph();
myGrapth.addVertex(0);
myGrapth.addVertex(1);
myGrapth.addVertex(2);
myGrapth.addVertex(3);
myGrapth.addVertex(4);
myGrapth.addVertex(5);
myGrapth.addVertex(6);
myGrapth.addEdges('3','1');
myGrapth.addEdges('3','4');
myGrapth.addEdges('4','2');
myGrapth.addEdges('4','5');
myGrapth.addEdges('1','2');
myGrapth.addEdges('1','0');
myGrapth.addEdges('0','2');
myGrapth.addEdges('6','5');

myGrapth.showConnections();

