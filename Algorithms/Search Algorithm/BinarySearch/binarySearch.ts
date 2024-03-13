const search = (arr:number[],needle:number):boolean=>{
    let lo = 0
    let hi = arr.length-1

    do {
       const middle = Math.floor((lo+hi)/2)
       
        if(arr[middle]===needle) return true
        if(arr[middle]<needle) lo = middle+1
        else hi = middle
    
    } while (lo<hi);

    return false
}

