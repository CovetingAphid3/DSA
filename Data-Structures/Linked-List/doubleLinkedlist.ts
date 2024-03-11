class DNode<T>{
    public value: number
    public next:DNode<T> | null
    public prev:DNode<T> | null
    constructor(value:number,next:DNode<T> | null,prev:DNode<T> | null){
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList{
    public length:number
    public head:DNode<number> | null
    constructor(){
        this.head=null
        this.length = 0
    }
    //print all nodes with links
    printList():void{
        if(!this.head){
            return
        }
        let curr = this.head
        let arr:number[]=[curr.value]
        while(curr.next){
            curr = curr.next
            arr.push(curr.value)
        }
        console.log(arr.join(" <--> "))
    }
    //add node to beginning
}
