//* A Graph is a non-linear data structure that  consists of a finite number of vertices(also called nodes) connected by edges

//*Trees are a specific type of graph data structure
//-There are 2 kind of Graphs
//Undirected and directed

//!Graphs are represented in two ways
//*Adjacency matrix
//*Adjacency list

//? Adjacency Matrix
// * An adjacency matrix is a 2D array of size V x V where V is the number of vertices in the graph
//*Each row and column represent a vertex
//*Id the value of any element say ,matrix [i][j] is 1 , it represents that there is an edge connecting vertex i and vertex j

//? Example

const matrix = [
	[0, 1, 0],
	[1, 0, 1],
	[0, 1, 0],
]

//?Adjacency List
//-Vertices are stored in a map like data structure ,and every vertex stores a list of its adjacent vertices

class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = new Set()
		}
	}

	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1]) {
			this.addVertex(vertex1)
		}
		if (!this.adjacencyList[vertex2]) {
			this.addVertex(vertex2)
		}
		this.adjacencyList[vertex1].add(vertex2)
		this.adjacencyList[vertex2].add(vertex1)
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].delete(vertex2)
		this.adjacencyList[vertex2].delete(vertex1)
	}

	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			return
		}
		for (let adjacentVertex of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, adjacentVertex)
		}
		delete this.adjacencyList[vertex]
	}

	hasEdge(vertex1, vertex2) {
		return (
			this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
		)
	}

	display() {
		for (let vertex in this.adjacencyList) {
			console.log(vertex + '->' + [...this.adjacencyList[vertex]])
		}
	}
}
