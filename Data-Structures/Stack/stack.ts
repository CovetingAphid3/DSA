type SNode = {
    value: number
    prev: SNode | null
}

class Stack {

    private head: SNode | null
    private size: number

    constructor() {
        this.size = 0
        this.head = null
    }

    printStack(): void {
        let result: number[] = []
        if (!this.head) {
            console.log("empty stack")
            return
        }
        let curr = this.head;
        while (curr) {
            result.push(curr.value)
            if (curr.prev) {
                curr = curr.prev
            } else {
                break
            }
        }
        console.log(result)
    }
    push(value: number): void {
        const node = {
            value: value,
            prev: this.head
        }
        this.head = node
        this.size++
    }
    pop(): number | undefined {
        if (!this.head) {
            return undefined
        }
        const out = this.head
        this.head = this.head.prev
        this.size--
        return out.value

    }
}

