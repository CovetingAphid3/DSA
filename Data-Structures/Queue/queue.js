//create node object
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
//first in first out
class Queue {
    //set intial values for head and tail to null
    constructor() {
        this.head = null;
        this.tail = null
        this.size = 0;
    }
    // Add to the tail
    enqueue(data) {
    let node = new Node(data);

    if (!this.head) {
        // If the queue is empty, set both head and tail to the new node
        this.head = node;
        this.tail = node;
    } else {
        // Otherwise, add the new node to the tail and update the tail reference
        this.tail.next = node;
        this.tail = node;
    }

    this.size++;
}
    //remove and return head
    dequeue() {
        //if head is empty return -1
        if (!this.head) {
            return -1
        }
        else {
            //otherwise return the head and set new head
            let current = this.head
            this.head = current.next
            this.size--
            return current
        }
    }
    //return length
    length() {
        return this.size
    }
    //print queue
    print() {
        let array = []
        if (!this.head) {
            return -1
        }
        else {
            let current = this.head
            array.push(current.value)
            while (current.next) {
                current = current.next
                array.push(current.value)
            }
        }
        return array
    }
}

