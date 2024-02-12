class MaxHeap {
    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value) {
        this.data.push(value);
        this.length++;
        this.heapifyUp();
    }

    delete(value) {
        const index = this.data.indexOf(value);
        if (index !== -1) {
            const last = this.data.pop();
            this.length--;
            if (index !== this.length) {
                this.data[index] = last;
                this.heapifyDown(index);
            }
        }
    }

    heapifyUp() {
        let index = this.length - 1;
        while (index > 0) {
            const parentIndex = this.parent(index);
            if (this.data[parentIndex] < this.data[index]) {
                [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown(index) {
        let currentIndex = index;
        while (true) {
            const leftChildIndex = this.leftChild(currentIndex);
            const rightChildIndex = this.rightChild(currentIndex);
            let largestIndex = currentIndex;

            if (leftChildIndex < this.length && this.data[leftChildIndex] > this.data[largestIndex]) {
                largestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.length && this.data[rightChildIndex] > this.data[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            if (currentIndex !== largestIndex) {
                [this.data[currentIndex], this.data[largestIndex]] = [this.data[largestIndex], this.data[currentIndex]];
                currentIndex = largestIndex;
            } else {
                break;
            }
        }
    }

    parent(index) {
        return Math.floor(index / 2);
    }

    leftChild(index) {
        return index * 2;
    }

    rightChild(index) {
        return index * 2 + 1;
    }
}
