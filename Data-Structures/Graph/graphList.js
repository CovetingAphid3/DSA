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
    printGraph() {
        for(const vertex in this.adjacencyList){
            const neighbors = Array.from(this.adjacencyList[vertex]);
            console.log(`${vertex} -> ${neighbors.join(', ')}`)
        }
    }
}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addEdge('A', 'B')
graph.printGraph()