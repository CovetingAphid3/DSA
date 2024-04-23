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
        while (curr.prev) {
            result.push(curr.value)
            if (curr.prev) {
                curr = curr.prev
            }
        }
        return
    }
    push(value:number):void{
        const node ={
            value:value,
            prev:this.head
        } 
        if(!this.head){
            this.head = node
            return
        }
    }
}
