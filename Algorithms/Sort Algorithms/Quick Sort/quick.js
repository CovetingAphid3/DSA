

const partition = (array, lo, hi) => {
    //set pivot to last element
    const pivot = array[hi]
    //initialize left pointer
    let i = lo - 1

    for (let j = lo; j < hi; j++) {
        //if right pointer i less than the pivot
        if (array[j] <= pivot) {
            //increment i 
            i++
            // swap array[j] and array[i]
            let temp = array[j]
            array[j] = array[i]
            array[i] = temp

        }
    }
    //put the pivot in its correct place (// Swap array[i+1] and array[hi])
    let tmp = array[hi]
    array[hi] = array[i + 1]
    array[i + 1] = tmp

    //return index of pivot element
    return i + 1
}

const quickSort = (array, lo, hi) => {
    //if the array length is not 1
    if (lo < hi) {
        //get partition index
        const partitionIndex = partition(array, lo, hi)

        //recursively sort sub arrays
        quickSort(array, lo, partitionIndex - 1)
        quickSort(array, partitionIndex + 1, hi)

    }

}

const test = () => {
    const arr = [64, 25, 12, 22, 11];
    quickSort(arr,0,arr.length -1)
    console.log(arr)
}

test()