console.log('test')

class Node{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //append to head of list
    prepend(data){
        this.head = new Node(data,this.head)
        this.size ++
    }
    //append to tail of list
    append(data){
        let node = new Node(data)

        let current = this.head
        if(!this.head){
            this.head = node
        }
        else{
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size ++
    }
    //return list as string
    printList(){
        let array = []
        let current = this.head
        if(!this.head){
            return `Empty List`
        }
        else{
            array.push(current.value)
            while(current.next){
                array.push(current.next.value)
                current = current.next
            }
            return array
        }
    }
    //return head of list
    headOfList(){
        let current = this.head
        return current.value
    }
    //return tail node
    tail(){
        let current = this.head
        if(!this.head){
            return `Empty List`
        }
        else{
            while(current.next){
                current = current.next
            }
            return current.value
        }
    }
    //remove tail
    removeLast(){
        let current = this.head
        let previous
        if(!this.head){
            return `Empty List`
        }
        else{
            while(current.next){
                previous=current
                current=current.next
            }
            previous.next = null
            return
        }
    }
    //return node at index
    //remove head
    //return if value exists
    find(data){
        if(!this.head){
            return `Empty list`
        }
        else{
            let current = this.head
            while(current.next){
                if(current.value===data){
                    return current
                }
                current = current.next
            }
            return false
        }
    }
    //return size of list 
    length(){
      return this.size
    }   
    //insert at index
    insert(data,index){
        if(index==0){
           this.prepend(data) 
        }
        if(index>this.size){
            console.log(`index out of range`)
        }
        let current,previous
    }
    //remove at index
    //reverse list
}

let ll = new linkedList()

ll.prepend(1)
ll.append(2)
ll.append(3)
ll.append(4)
console.log(ll.find(1))
console.log(ll.length())
console.log(ll.printList())
console.log(ll)