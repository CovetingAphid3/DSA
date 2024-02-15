class Node:
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None

class Tree:
    def __init__(self) :
        self.root = None

    #insert
    def insert(self,value):
        self.root = self._insert(self.root,value)

    def _insert(self,currentNode,value):
        if not currentNode:
            return Node(value)

        if value < currentNode.value:
            currentNode.left = self._insert(currentNode.left,value)
        elif value > currentNode.value:
            currentNode.right = self._insert(currentNode.right,value)
        return currentNode            
    #delete

    #max
    def max(self):
        return self._max(self.root)
    
    def _max(self,currentNode):
        if not currentNode.right:
            return currentNode.value
        else:
            return self._max(currentNode.right)
    #min
    def min(self):
        return self._min(self.root)

    def _min(self,currentNode):
        if not currentNode.left:
            return currentNode.value
        else:
            return self._min(currentNode.left)
    #find value
    def find(self,value):
        return self._find(self.root,value)

    def _find(self,currentNode,value):
        if not currentNode:
            return False
        if currentNode.value == value:
            return True
        if value > currentNode.value:
            return self._find(currentNode.right,value)
        elif value < currentNode.value:
            return self._find(currentNode.left,value)
        return False    
    #
    #
    #

t = Tree()
t.insert(10)
t.insert(3)
t.insert(11)
print(t.find(3))
print(t.min())
print(t.max())

