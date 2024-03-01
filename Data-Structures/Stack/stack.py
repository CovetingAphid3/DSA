class Node:
    def __init__(self,value,prev):
        self.value = value
        self.prev = prev

class Stack:
    def __init__(self):
        self.head = None
        self.lenght = 0

    def append(self,data):
        node = Node(data,self.head)
        if not self.head:
            self.head = node
        else:
            current = self.head
            self.head = node
            node.prev = current
        self.lenght += 1

    def pop(self):
        if self.head is None:
            return "Empty Stack"
        curr = self.head
        self.head = self.head.prev
        self.lenght -= 1
        return curr


    def peek(self):
        if self.head is not None:
            print(self.head.value)
        else:
            print("Stack is empty")


    def size(self):
        return self.size

    def print_stack(self):
        array = []
        if not self.head:
            return -1
        current = self.head
        array.insert(0,current.value)
        while current.prev:
            current = current.prev
            array.insert(1,current.value)
        return array

