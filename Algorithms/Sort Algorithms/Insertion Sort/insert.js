const insert=(array)=>{
    
    for(let i = 1;i < array.length;i++){
        let temp = array[i]
        let j = i - 1

        while(j >= 0 && array[j] > temp){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = temp
    }
    return array
}


let testArray = [8, 5, 3, 2, 7, 1]
let sortedArray = insert(testArray)
console.log(sortedArray)