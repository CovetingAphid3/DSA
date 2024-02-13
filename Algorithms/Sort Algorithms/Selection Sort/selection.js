const insert = (array) => {
    let n = array.length
    for (let i = 0; i < n; i++) {
        let smallestIndex = i
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[smallestIndex]) {
                smallestIndex = j
            }
        }
        [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]]
    }
    return array
}

let testArray = [8, 5, 3, 2, 7, 1]
let sortedArray = insert(testArray)
console.log(sortedArray)