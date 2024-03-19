class CustomArray {
    public array: number[] = [];
    public size: number
    public capacity: number
    constructor() {
        this.size = 0
        this.capacity = 10
    }
    printArray(): void {
        console.log(`size of array is ${this.size}`)
        const result:number[]=[]
        for(let i =0;i<this.size;i++){
            result[i]=this.array[i]
        }
        console.log(result)
    }
    //insert number at end
    insertAtEnd(value: number): void {
        if (this.size >= this.capacity) {
            return
        }
        this.array[this.size] = value
        this.size++
    }
    //insert at begin
    insertAtBegin(value: number): void {
        if (this.size >= this.capacity) {
            return
        }
        for (let i = 0; i < this.size; i++) {
            this.array[i + 1] = this.array[i]
        }
        this.array[0] = value
        this.size++
    }
    //insert at index
    insertAt(index: number, value: number): void {
        if (this.size >= this.capacity) {
            return
        }
        if (index > this.size || index < 0) {
            return
        }
        if (index === this.size) {
            this.insertAtEnd(value)
        }
        if (index === 0) {
            this.insertAtBegin(value)
        }
        for (let i = index; i < this.size; i++) {
            this.array[i + 1] = this.array[i]
        }
        this.array[index] = value
        this.size++
    }
    //delete at end 
    deleteAtEnd(): void {
        if (this.size === 0) {
            return
        }
        this.array[this.size - 1] = -1
        this.size--
    }
    //delete at begin
    deleteAtBegin(): void {
        if (this.size === 0) {
            return
        }
        for (let i = 1; i < this.size; i++) {
            this.array[i - 1] = this.array[i]
        }
        this.array[this.size - 1] = -1
        this.size--
    }
    //delete at index
    deleteAt(index: number): void {
        if(this.size===0){
            return
        }
        if(index>this.size||index<0){
            return
        }
        if(index===this.size-1){
            this.deleteAtEnd()
        }
        if(index===0){
            this.deleteAtBegin()
        }
        for(let i=index;i<this.size-1;i++){
            this.array[i]=this.array[i+1]
        }
        this.array[this.size-1]=-1
        this.size--
    }
}
