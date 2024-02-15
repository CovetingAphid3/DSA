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
    def delete(self, value):
        self.root = self._delete(self.root, value)

    def _delete(self, node, value):
        if not node:
            return None
        if value == node.value:
            # case 1: node with only one child or no child
            if not node.left:
                return node.right
            elif not node.right:
                return node.left

            # case 2: node with two children
            node.value = self._find_min(node.right).value
            node.right = self._delete(node.right, node.value)
        elif value < node.value:
            node.left = self._delete(node.left, value)
        elif value > node.value:
            node.right = self._delete(node.right, value)

        return node

    def _find_min(self, node):
        while node.left:
            node = node.left
        return node


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
    #Traversal
    #BFS
    def BFS(self):
        if not self.root:
            return []
        queue = []
        result = []
        
        queue.append(self.root)

        while len(queue):
            currentNode = queue.pop(0)
            result.append(currentNode.value)

            if currentNode.left:
                queue.append(currentNode.left)
            if currentNode.right:
                queue.append(currentNode.right)    
        return result    
    #DFS
    #pre_order
    def pre_order(self):
        result = []
        if not self.root:
            return
    
        def walk(currentNode):
            
            result.append(currentNode.value)
            if currentNode.left:
                walk(currentNode.left)
            if currentNode.right:
                walk(currentNode.right)    

        walk(self.root)
        return result    
    #post_order
    def post_order(self):
        if not self.root:
            return
        result = []

        def walk(currentNode):
            if currentNode.left:
                walk(currentNode.left)
            result.append(currentNode.value)
            if currentNode.right:
                walk(currentNode.right)
        walk(self.root)
        return result        

    #in_order
    def in_order(self):
        if not self.root:
            return
        result = []

        def walk(currentNode):
            if currentNode.left:
                walk(currentNode.left)
            if currentNode.right:
                walk(currentNode.right)
            result.append(currentNode.value)
        walk(self.root)
        return result        

    #height
    def height(self):
        return self._height(self.root)
    def _height(self,currentNode):
        if not currentNode:
            return 0
        
        leftHeight = self._height(currentNode.left)
        rightHeight = self._height(currentNode.right)
        
        height = max(leftHeight,rightHeight) + 1
        return height



