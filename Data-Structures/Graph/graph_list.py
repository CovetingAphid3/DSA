from collections import deque

class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def add_vertex(self, vertex):
        if vertex not in self.adjacency_list:
            self.adjacency_list[vertex] = set()

    def add_edge(self, vertex1, vertex2):
        self.add_vertex(vertex1)
        self.add_vertex(vertex2)
        self.adjacency_list[vertex1].add(vertex2)
        self.adjacency_list[vertex2].add(vertex1)

    def print_graph(self):
        for vertex, neighbours in self.adjacency_list.items():
            neighbours_str = ", ".join(map(str, neighbours))
            print(f"{vertex} -> {neighbours_str}")

    def BFS(self, start, needle=None):
        if not self.adjacency_list[start] or not start:
            return []

        result = []
        visited = {vertex: False for vertex in self.adjacency_list}

        queue = deque([start])
        visited[start] = True

        while queue:
            current_vertex = queue.popleft()
            result.append(current_vertex)

            if needle and current_vertex == needle:
                return result  # If needle is found, return the result

            for neighbour in self.adjacency_list[current_vertex]:
                if not visited[neighbour]:
                    queue.append(neighbour)
                    visited[neighbour] = True

        return result

# Example usage
g = Graph()
g.add_vertex('A')
g.add_vertex('B')
g.add_vertex('C')
g.add_vertex('D')
g.add_edge('A', 'B')
g.add_edge('B', 'C')
g.add_edge('C', 'D')

print("Graph:")
g.print_graph()

print("\nBFS starting from 'A':")
bfs_result = g.BFS('A','C')
print(bfs_result)

# Searching for 'D' using BFS
print("\nBFS searching for 'D' starting from 'A':")
search_result = g.BFS('A', 'D')
print(search_result)
