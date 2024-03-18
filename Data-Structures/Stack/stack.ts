class SNode<T> {
    public value: number
    public next: LNode<T> | null

    constructor(value: number, next: LNode<T> | null) {
        this.value = value
        this.next = next
    }

}
class Stack {
    public length: number;
    public head: LNode<number> | null

    constructor() {
        this.length = 0
        this.head = null
    }
    push(value: number): void {
        this.length++
        const node = new SNode(value, null)
        if (!this.head) {
            this.head = node
            return
        }
        node.next = this.head
        this.head = node
    }
    pop():number|undefined{
        if(!this.head){
            return undefined
        }
        const out = this.head
        this.head = this.head.next
        return out.value
    }
    peek():number|undefined{
        return this.head?.value
    }
}
