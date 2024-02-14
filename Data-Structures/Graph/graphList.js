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
    DFS(start, needle) {
        if (!start || !this.adjacencyList[start]) {
            return null; // Vertex not found in the graph
        }

        const visited = {};
        const result = [];

        const dfsHelper = (vertex) => {
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);

                for (const neighbor of this.adjacencyList[vertex]) {
                    dfsHelper(neighbor);
                }
            }
        };

        dfsHelper(start);


        return result.includes(needle) ? result : null;
    }
}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A', 'B')
graph.addEdge('C', 'D')
graph.addEdge('B','C')
console.log(graph.DFS('C','B'))
// graph.printGraph()