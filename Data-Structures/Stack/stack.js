//create node object
class Node {
    constructor(value, prev) {
        this.value = value
        this.prev = prev
    }
}
//last in first out
class Stack {
    //set initial value of head to null
    constructor() {
        this.head = null;
        this.size = 0
    }
    //append stack
    append(data) {
        let node = new Node(data)
        if (!this.head) {
            //if stack is empty create a new head
            this.head = node
        }
        else {
            //otherwise add node to stack and set to head
            let current = this.head;
            this.head = node
            node.prev = current
        }
        this.size++
    }
    //remove head from stack
    pop() {
        if (!this.head) {
            return -1
        }
        else {
            let current = this.head
            this.head = current.prev
            current = null
        }
        this.size > 0 ? this.size-- : console.log('error')
    }
    //return head of stack
    peek() {
        return this.head?.value
    }
    //show stack size
    length() {
        return this.size
    }
    //print stack
    print() {
        let array = []
        if (!this.head) {
            return -1
        }
        else {
            let current = this.head
            array.unshift(current.value)
            while (current.prev) {
                current = current.prev
                array.unshift(current.value)
            }
        }
        return array
    }
}



