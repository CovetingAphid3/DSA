class Node:
    def __init__(self,value,prev):
        self.value = value
        self.prev = prev

class Stack:
    def __init__(self):
        self.head = None
        self.size = 0

    def append(self,data):
        node = Node(data,self.head)
        if not self.head:
            self.head = node
        else:
            current = self.head
            self.head = node
            node.prev = current
        self.size += 1 

    def pop(self):
        if not self.head:
            return -1
        else:
            current = self.head
            self.head = current.prev
            current = None
        if self.size > 0:
            self.size -= 1    

    def peek(self):
        return self.head.value
    
    def size(self):
        return self.size

    def printStack(self):
        array = []
        if not self.head:
            return -1
        else:
            current = self.head
            array.insert(0,current.value)
            while current.prev:
                current = current.prev
                array.insert(1,current.value)
                
        return array        
