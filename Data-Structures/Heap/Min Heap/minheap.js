var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.length = 0;
        this.data = [];
    }
    MinHeap.prototype.insert = function (value) {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    };
    MinHeap.prototype.delete = function () {
        if (this.length === 0) {
            return undefined;
        }
        var out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    };
    MinHeap.prototype.heapifyUp = function (idx) {
        if (idx == 0)
            return;
        var parentIndex = this.parent(this.length);
        var parentValue = this.data[parentIndex];
        var value = this.data[idx];
        if (parentValue < value) {
            this.data[idx] = parentValue;
            this.data[parentIndex] = value;
            this.heapifyUp(parentIndex);
        }
    };
    MinHeap.prototype.heapifyDown = function (idx) {
        var leftIndex = this.leftChild(idx);
        var rightIndex = this.rightChild(idx);
        if (idx >= this.length || leftIndex >= this.length) {
            return;
        }
        var leftValue = this.data[leftIndex];
        var rightValue = this.data[rightIndex];
        var value = this.data[idx];
        if (leftValue > rightValue && value > rightValue) {
            this.data[idx] = rightValue;
            this.data[rightIndex] = value;
            this.heapifyDown(rightIndex);
        }
        if (rightValue > leftValue && value > leftValue) {
            this.data[idx] = leftValue;
            this.data[leftIndex] = value;
            this.heapifyDown(leftIndex);
        }
    };
    MinHeap.prototype.parent = function (idx) {
        return Math.floor((idx - 1) / 2);
    };
    MinHeap.prototype.leftChild = function (idx) {
        return idx * 2 + 1;
    };
    MinHeap.prototype.rightChild = function (idx) {
        return idx * 2 + 2;
    };
    MinHeap.prototype.peek = function () {
        console.log(this.data[0]);
    };
    return MinHeap;
}());
var heap = new MinHeap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.peek();
