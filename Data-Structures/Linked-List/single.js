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
    findAt(index){
        if(!this.head){
            return `Empty list`
        }
        else{
            let count = 0
            let current = this.head
            while(current.next){
                if(count === index){
                    return current.value
                }
                current = current.next
                count ++
            }
            
        }
    }
    //remove head
    removeHead(){
        let current = this.head
        this.head = current.next
        let previous = current
        previous = null

    }
    //return if value exists
    find(data){
        if(!this.head){
            return `Empty list`
        }
        else{
            let current = this.head
            while(current.next){
                if(current.value===data){
                    return true
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
        
        if(!this.head){
            return `Empty list`
        }
        if(index == 0){
            this.prepend(data)
        }
        else if(index>=this.size){
            return `index out of range`
        }
        else if(index===-1 || index == this.size-1){
            this.append(data)
        }   
        else{
            let count = 0
            let current = this.head
            let previous
            while(current.next){
                
                if(count === index){
                    let node = new Node(data)
                    previous.next = node
                    node.next = current
                    return
                }
                previous = current
                current = current.next
                count ++
            }
            
        }
    }
    //remove at index
    removeAt(index){
        if(!this.head){
            return `Empty list`
        }
        
        else if(index>=this.size){
            return `index out of range`
        }
        if(index === 0){
            this.removeHead()
        }
        else if(index === -1 || index == this.size-1){
            this.removeLast()
        }  
        else{
            let count = 0
            let current = this.head
            let previous
            while(current.next){
                
                if(count === index){
                    previous.next = previous.next.next
                    current = null
                    return
                }
                previous = current
                current = current.next
                count ++
            }
            
        }
    }
    //create linked list from array
    listFromArray(array){
        for(let i = array.length-1;i>=0;i--){
            this.prepend(array[i])
        }
    }

}

