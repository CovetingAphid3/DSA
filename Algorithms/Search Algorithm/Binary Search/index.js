console.log('test')

const binarySearch = (array, value) => {
    let lo = 0;
    let hi = array.length - 1;

    do {
        let middle = Math.floor((lo + hi) / 2);


        if (array[middle] === value) {
            return `${array[middle]} at index ${middle}`;
        } else if (value < array[middle]) {
            hi = middle - 1;
        } else if (value > array[middle]) {
            lo = middle + 1;
        }
    } while (lo <= hi);

    return `${value} not found in the array`;
};
const test=()=>{
    console.log(binarySearch([1,2,3,4,5,6,7],3))
    console.log(binarySearch([1,2,3,4,5,6,7],7))
    console.log(binarySearch([1,2,3,4,5,6,7],1))
}

test()