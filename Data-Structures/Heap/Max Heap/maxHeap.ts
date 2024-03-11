class MaxHeap {

    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    printHeap(): void {
        console.log(this.data);
    }

    insert(value: number): void {
        this.data[this.length] = value
        this.length++
        this.heapifyUp(this.length - 1)
    }

    delete(): number | undefined {
        if (this.length === 0) {
            return undefined
        }
        const out = this.data[0]
        this.length--
        if (this.length === 0) {
            this.data = []
            return out
        }
        this.data[0] = this.data[this.length - 1]
        this.data.pop()
        this.heapifyDown(0)

        return out
    }

    heapifyUp(idx: number): void {
        if (this.length == 0) {
            return
        }
        const parentIdx = this.parent(idx)
        const parentValue = this.data[parentIdx]
        const value = this.data[idx]

        if (parentValue < value) {
            this.data[idx] = parentValue
            this.data[parentIdx] = value

            this.heapifyUp(parentIdx)
        }
    }

    heapifyDown(idx: number): void {
        const leftIndex = this.leftChild(idx)
        const rightIndex = this.rightChild(idx)

        if (idx >= this.length || leftIndex >= this.length) return

        const leftValue = this.data[leftIndex]
        const rightValue = this.data[rightIndex]
        const value = this.data[idx]

        if (rightValue > leftValue && value < rightValue) {
            this.data[idx] = rightValue
            this.data[rightIndex] = value
            this.heapifyDown(rightIndex)
        }

        if (leftValue > value && value < leftValue) {
            this.data[idx] = leftValue
            this.data[leftIndex] = value
            this.heapifyDown(leftIndex)
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2
    }
}
//example use
let heap = new MaxHeap();
heap.insert(100);
heap.printHeap(); // [100]

heap.insert(5);
heap.printHeap(); // [100, 5]

heap.insert(10);
heap.printHeap(); // [100, 5, 10]

heap.insert(20);
heap.printHeap(); // [100, 20, 10, 5]

heap.delete();
heap.printHeap()
