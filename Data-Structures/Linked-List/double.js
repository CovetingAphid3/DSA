

class Node{
    constructor(value,next,prev){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class List{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //prepend to head of list
    prepend(data){
        this.head = new Node(data,this.head)
        this.size ++
    }
// append to end of list
append(data) {
    let node = new Node(data);
    if (!this.head) {
        this.head = node;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = node;
        node.prev = current;
    }
    this.size++;
}
    //print list as an array
    printList(){
        let array = []
        if(!this.head){
            return null
        }
        else{
            let current = this.head
            array.push(current.value)
            while(current.next){
                current = current.next
                array.push(current.value)          
            }
            return array
        }
    }
    //insert at index
    insertAt(data, index) {
        let node = new Node(data);
    
        if (index > this.size) {
            return `Out of range of index`;
        }
    
        if (!this.head) {
            this.head = node;
            this.size++;
            return;
        }
    
        if (index === 0) {
            this.prepend(data);
        } else if (index === -1 || index === this.size - 1) {
            this.append(data);
        } else {
            let count = 0;
            let current = this.head;
            let previous;
    
            while (count < index) {
                previous = current;
                current = current.next;
    
                if (count === index - 1) {
                    previous.next = node;
                    node.prev = previous;
                    node.next = current;
                    current.prev = node;
                    this.size++;
                    return;
                }
    
                count++;
            }
        }
    }
    //remove at index value
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return `Invalid index`;
        }
    
        if (index === 0) {
            // Removing the head
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        } else {
            let count = 0;
            let current = this.head;
    
            while (count < index) {
                current = current.next;
                count++;
            }
    
            current.prev.next = current.next;
    
            if (current.next) {
                // If not the last node
                current.next.prev = current.prev;
            }
        }
    
        this.size--;
    }
    
}

