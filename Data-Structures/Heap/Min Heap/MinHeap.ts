//min heap
class MinHeap {
    public arr: number[]
    public length: number
    constructor() {
        this.arr = []
        this.length = 0
    }
    //print heap
    print(): void {
        console.log(this.arr)
    }
    insert(value: number): void {
        this.arr[this.length]=value
        this.headpifyUp(this.length)
        this.length++
    }

    delete(): number | undefined {
        if(this.length===0) return undefined
        const out = this.arr[0]
        this.arr[0] = this.arr[this.length-1]
        this.arr.pop() 
        this.length--
        this.headpifyDown(0)
        return out 
    }


    headpifyUp(idx: number): void {

        if (this.length === 0) {
            return
        }
        const parentIndex = this.parent(idx)
        const parentValue = this.arr[parentIndex]
        const value = this.arr[idx]

        if (value < parentValue) {
            this.arr[idx] = parentValue
            this.arr[parentIndex] = value
            this.headpifyUp(parentIndex)
        }
    }

    headpifyDown(idx: number): void {
        const leftIndex = this.leftChild(idx)
        const rightIndex = this.rightChild(idx)

        if(leftIndex >= this.length||idx>=this.length) {
            return
        }
        const leftValue = this.arr[leftIndex]
        const rightValue = this.arr[rightIndex]
        const value = this.arr[idx]

        //case 1: left is the smallest
        if(leftValue<rightValue && value > leftValue){
            this.arr[leftIndex] = value
            this.arr[idx] = leftValue
            this.headpifyDown(leftIndex)
        }
        //case 2: right is the smallest
        if(rightValue<leftValue && value > rightValue){
            this.arr[rightIndex] = value
            this.arr[idx] = rightValue
            this.headpifyDown(rightIndex)
        }
    }

    private parent(idx: number): number { return Math.floor((idx - 1) / 2) }
    private leftChild(idx: number): number { return 2 * idx + 1 }
    private rightChild(idx: number): number { return 2 * idx + 2 }
}
