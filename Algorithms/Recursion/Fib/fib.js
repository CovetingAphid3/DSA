const fib = (n)=> {
    if(n === 1){
        return 1
    }
    return n + fib(n-1)
}

const test = ()=>{
    console.log(fib(5))
}
test()