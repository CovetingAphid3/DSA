class Node:
    def __init__(self,value,next):
        self.value = value
        self.next = next

class Queue:
    def __init__(self) :
        self.head = None
        self.tail = None
        self.size = 0

    def print_queue(self):
        array = []
        current = self.head

        while current:
            array.append(current.value)
            current = current.next

        return array

    def enqueue(self,data):
        node = Node(data,None)

        if not self.head:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.size += 1
    
    def size(self):
        return self.size

    def dequeue(self):
        if not self.head:
            return -1
        else:
            current = self.head
            self.head = current.next
            self.size -= 1
            return current



