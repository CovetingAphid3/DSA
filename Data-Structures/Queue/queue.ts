type QNode = {
    value: number
    next: QNode | null
}

class Queue {

    private head: QNode | null
    private tail: QNode | null
    private size: number

    constructor() {
        this.head = this.tail = null
        this.size = 0
    }

    printQueue(): void {
        if (!this.head) {
            return
        }
        let result: number[] = []
        let curr = this.head
        while (curr) {
            result.push(curr.value)
            if (curr.next) {
                curr = curr.next
            } else {
                break
            }
        }
        console.log(result)
    }
    enqueue(value: number): void {
        this.size++
        const node = {
            value: value,
            next: null
        }
        if (!this.head) {
            this.head = this.tail = node
            return
        }
        if (this.tail) {
            this.tail.next = node
            this.tail = node
        }
    }
}

