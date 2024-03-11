class LNode<T> {
    public value: number
    public next: LNode<T> | null

    constructor(value: number, next: LNode<T> | null) {
        this.value = value
        this.next = next
    }
}

class LList {
    public length: number;
    public head: LNode<number> | null

    constructor() {
        this.length = 0
        this.head = null
    }
    //print list
    printList(): void {
        let result: number[] = []
        if (!this.head) {
            return
        }
        let curr = this.head
        for (let i = 0; i < this.length; i++) {
            result.push(curr.value)
            if (curr.next) {
                curr = curr.next
            }
        }
        console.log(result.join(' -> '))
    }

    //insert node
    append(value: number): void {
        this.length++
        const node = new LNode(value, null)
        if (!this.head) {
            this.head = node
        }
        let curr = this.head
        for (let i = 0; i < this.length; i++) {
            if (curr.next) {
                curr = curr.next
            }
        }
        curr.next = node
    }
    prepend(value: number): void {
        this.length++
        if (!this.head) {
            this.append(value)
        }
        const node = new LNode(value, this.head)
        this.head = node
    }
    pop(): LNode<number> | undefined {
        if (!this.head) {
            return undefined
        }
        let curr = this.head
        for (let i = 0; i <= this.length - 2; i++) {
            if (curr.next) curr = curr.next
        }
        curr.next = null
        this.length--

    }
    clear(): void {
        this.head = null
        this.length = 0
    }

}
