const linearSearch = (array:number[], needle:number):boolean => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === needle) {
            return true;
        }
    }
    return false
}
