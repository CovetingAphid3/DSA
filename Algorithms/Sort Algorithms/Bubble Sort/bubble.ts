function sort(arr: number[]):number[]|undefined{
    if(!arr.length) return
    for(let i = 0; i <arr.length;i++){
        for(let j = 0; j < arr.length -1 -i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

const test = () => {
  console.log(sort([64, 34, 25, 12, 22, 11, 90]));
  console.log(sort([5,1,3,2,4,6,0]));
};

test()
