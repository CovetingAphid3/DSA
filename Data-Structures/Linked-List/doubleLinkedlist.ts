class DNode<T> {
    public value: number
    public next: DNode<T> | null
    public prev: DNode<T> | null
    constructor(value: number, next: DNode<T> | null, prev: DNode<T> | null) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {
    public length: number
    public head: DNode<number> | null
    public tail: DNode<number> | null
    constructor() {
        this.head = this.tail = null
        this.length = 0
    }
    //print all nodes with links
    printList(): void {
        if (!this.head) {
            return
        }
        let curr = this.head
        let arr: number[] = [curr.value]
        while (curr.next) {
            curr = curr.next
            arr.push(curr.value)
        }
        console.log(arr.join(" <--> "))
    }
    //add node to beginning
    prepend(value: number): void {
        this.length++
        const node = new DNode<number>(value, this.head, null)
        if (!this.head) {
            this.head = this.tail = node
            return
        }
        this.head = node
    }
    //add node to end
    append(value: number): void {
        if (!this.head) {
            this.prepend(value)
            return
        }
        this.length++
        const node = new DNode(value, null, this.tail)
        this.tail ? this.tail.next = node : this.tail = node
        this.tail = node
    }
    //pop from end
    deque(): number | undefined {
        if (!this.head) {
            return undefined
        }
        this.length--
        if (!this.tail) {
            const head = this.head
            this.head = this.tail = null
            return head.value
        }
        const out = this.tail
        this.tail ? this.tail.next = null : null
        this.tail = out.prev
        return out.value
    }
    //remove from beginning
    pop(): number | undefined {
        if (!this.head) {
            return undefined
        }
        this.length--
        const out = this.head
        this.head = this.head.next
        return out.value

    }
    //insert value at index
    insertAt(value: number, idx: number): void {
        if (idx > this.length || idx < 0) {
            return
        }
        if (!this.head || idx === 0) {
            this.prepend(value)
            return
        }
        if (idx === this.length) {
            this.append(value)
            return
        }

        this.length++
        const node = new DNode(value, null, null)
        let curr = this.head
        for (let i = 0; i < idx; i++) {
            if (curr.next) {
                curr = curr.next
            }
        }
        node.prev = curr.prev
        node.next = curr
        curr.prev ? curr.prev.next = node : null
        curr.prev = node

    }
    //delte at index
    removeAt(idx: number): number | undefined {
        if (!this.head || idx >= this.length || idx < 0) {
            return
        }
        if (idx == 0) {
            this.pop()
        }
        if (idx === this.length - 1) {
            this.deque()
        }
        this.length--
        let curr = this.head
        for (let i = 0; i < idx; i++) {
            if (curr.next) {
                curr = curr.next
            }
        }
        curr.prev? curr.prev.next = curr.next:null
        curr.next? curr.next.prev = curr.prev:null
        return curr.value
    }
    //find value return true if it exists
    find(value: number): boolean {
        if (!this.head) {
            return false
        }
        let curr = this.head
        while (curr.next) {
            if (curr.value === value) {
                return true
            }
            curr = curr.next
        }
        return false
    }
    //find value at index
    findAt(idx: number): number | undefined {
        if (!this.head) {
            return undefined
        }
        if (idx > this.length || idx < 0) {
            return undefined
        }
        let curr = this.head
        for (let i = 0; i <= idx; i++) {
            if (curr.next) {
                curr = curr.next
            }
        }
        return curr.value
    }
    //create linked list from array
    linkedFromAray(arr: number[]): void {
        arr.forEach(number => this.append(number))
    }

    //clear list
    clear(): void {
        this.head = this.tail = null
        this.length = 0
    }
    //slice method to return a new list from index to index
    slice(start: number, end: number): DoublyLinkedList | undefined {
        if (!this.head || start < 0 || end >= this.length || start > end) {
            return undefined;
        }

        let returnList = new DoublyLinkedList();
        let curr = this.head;
        for (let i = 0; i < end; i++) {
            if (i >= start && i <= end) {
                returnList.append(curr.value)
            }
            if (curr.next) {
                curr = curr.next
            }
        }
        if (end >= start && curr) {
            returnList.append(curr.value);
        }
        return returnList
    }
    //reverse doubly linked list
    reverse(): void {
        if (!this.head) {
            return
        }
        let newList = new DoublyLinkedList()
        let curr = this.head

        for (let i = 0; i < this.length; i++) {
            newList.prepend(curr.value)
            if (curr.next) {
                curr = curr.next
            }
        }
        this.copy(newList)
    }
    //copy one list to another
    private copy(newList: DoublyLinkedList) {
        this.clear()
        let curr = newList.head
        while (curr) {
            this.append(curr.value)
            if (curr.next) {
                curr = curr.next
            }
            else {
                break
            }
        }
    }


}




