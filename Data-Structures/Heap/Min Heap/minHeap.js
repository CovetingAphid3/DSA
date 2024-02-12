class MinHeap {
    constructor() {
        this.length = 0
        this.data = []
    }

    insert(value) {
        this.data.push(value)
        this.length++
        this.heapifyUp()
    }

    delete(value) {
        const index = this.data.indexOf(value)
        if (index !== -1) {
            const last = this.data.pop()
            this.length--
            if (index !== this.length) {
                this.data[index] = last
                this.heapifyDown(index)
            }
        }
    }

    heapifyUp() {
        let index = this.length - 1
        while (index > 0) {
            const parentIndex = this.parent(index)
            if (this.data[parentIndex] > this.data[index]) {
                [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]]
                index = parentIndex
            } else {
                break
            }
        }
    }

    heapifyDown(index) {
        let currentIndex = index
        while (true) {
            const leftChildIndex = this.leftChild(currentIndex)
            const rightChildIndex = this.rightChild(currentIndex)
            let smallestIndex = currentIndex

            if (leftChildIndex < this.length && this.data[leftChildIndex] < this.data[smallestIndex]) {
                smallestIndex = leftChildIndex
            }

            if (rightChildIndex < this.length && this.data[rightChildIndex] < this.data[smallestIndex]) {
                smallestIndex = rightChildIndex
            }

            if (currentIndex !== smallestIndex) {
                [this.data[currentIndex], this.data[smallestIndex]] = [this.data[smallestIndex], this.data[currentIndex]]
                currentIndex = smallestIndex
            } else {
                break
            }
        }
    }

    parent(index) {
        return Math.floor(index / 2)
    }

    leftChild(index) {
        return index * 2
    }

    rightChild(index) {
        return index * 2 + 1
    }
}
