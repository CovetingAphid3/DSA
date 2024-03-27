type LNode<T> = {
    value: T,
    next?: LNode<T>,
    prev?: LNode<T>
}
function createNode<V>(value:V):LNode<V>{
    return {value}
}

class LRU<K,V>{
    constructor() {
    }

    update() {}

    get(){}
}
