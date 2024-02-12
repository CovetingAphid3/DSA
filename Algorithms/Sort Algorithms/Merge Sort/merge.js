
const merge = (arr) => {
    // Base case: if the array has only one element, it is already sorted
    if (arr.length === 1) {
        return arr;
    }

    // Calculate the middle index of the array
    const middle = Math.floor(arr.length / 2);

    // Divide the array into two halves: left and right
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    // Recursively call the merge function on the left and right halves
    return _merge(merge(leftHalf), merge(rightHalf));
}

// Helper function to merge two sorted arrays
const _merge = (left, right) => {
    let result = [];
    let rightIndex = 0;
    let leftIndex = 0;

    // Merge elements from left and right arrays in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from both left and right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

