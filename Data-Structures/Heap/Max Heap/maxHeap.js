var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.length = 0;
        this.data = [];
    }
    MaxHeap.prototype.printHeap = function () {
        console.log(this.data);
    };
    MaxHeap.prototype.insert = function (value) {
        this.data[this.length] = value;
        this.length++;
        this.heapifyUp(this.length - 1);
    };
    MaxHeap.prototype.delete = function () {
        if (this.length === 0) {
            return undefined;
        }
        var out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length - 1];
        this.data.pop();
        this.heapifyDown(0);
        return out;
    };
    MaxHeap.prototype.heapifyUp = function (idx) {
        if (this.length == 0) {
            return;
        }
        var parentIdx = this.parent(idx);
        var parentValue = this.data[parentIdx];
        var value = this.data[idx];
        if (parentValue < value) {
            this.data[idx] = parentValue;
            this.data[parentIdx] = value;
            this.heapifyUp(parentIdx);
        }
    };
    MaxHeap.prototype.heapifyDown = function (idx) {
        var leftIndex = this.leftChild(idx);
        var rightIndex = this.rightChild(idx);
        if (idx >= this.length || leftIndex >= this.length)
            return;
        var leftValue = this.data[leftIndex];
        var rightValue = this.data[rightIndex];
        var value = this.data[idx];
        if (rightValue > leftValue && value < rightValue) {
            this.data[idx] = rightValue;
            this.data[rightIndex] = value;
            this.heapifyDown(rightIndex);
        }
        if (leftValue > value && value < leftValue) {
            this.data[idx] = leftValue;
            this.data[leftIndex] = value;
            this.heapifyDown(leftIndex);
        }
    };
    MaxHeap.prototype.parent = function (idx) {
        return Math.floor((idx - 1) / 2);
    };
    MaxHeap.prototype.leftChild = function (idx) {
        return idx * 2 + 1;
    };
    MaxHeap.prototype.rightChild = function (idx) {
        return idx * 2 + 2;
    };
    return MaxHeap;
}());
var heap = new MaxHeap();
heap.insert(100);
heap.printHeap(); // [100]
heap.insert(5);
heap.printHeap(); // [100, 5]
heap.insert(10);
heap.printHeap(); // [100, 5, 10]
heap.insert(20);
heap.printHeap(); // [100, 20, 10, 5]
heap.delete();
heap.printHeap();
