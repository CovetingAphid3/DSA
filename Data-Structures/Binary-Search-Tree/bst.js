class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    //insert
    insert(currentNode, data) {
        if (!currentNode) {
            return new Node(data);
        }

        if (data < currentNode.value) {
            currentNode.left = this.insert(currentNode.left, data);
        } else if (data > currentNode.value) {
            currentNode.right = this.insert(currentNode.right, data);
        }

        return currentNode;
    }
    insertNode(data) {
        this.root = this.insert(this.root, data);
    }
    //delete
    deleteNode(data) {
        this.root = this._delete(this.root, data);
    }
    
    _delete(node, data) {
        if (!node) {
            return null;
        }
    
        if (data === node.value) {
            // Case 1: Node with only one child or no child
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            }
    
            // Case 2: Node with two children
            node.value = this._findMin(node.right).value;
            node.right = this._delete(node.right, node.value);
        } else if (data < node.value) {
            node.left = this._delete(node.left, data);
        } else if (data > node.value) {
            node.right = this._delete(node.right, data);
        }
    
        return node;
    }
    
    _findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    

    //search
    find(data) {
        return this._find(this.root, data)
    }
    _find(node, data) {
        if (node === null) {
            return false
        }
        if (node.value === data) {
            return true
        }
        else if (data > node.value) {
            return this._find(node.right, data)
        }
        else if (data < node.value) {
            return this._find(node.left, data)
        }
    }
    //traversal
    //DFS
    //BFS
    BFS() {
        let currentNode = this.root
        //array to hold nodes
        let queue = []
        //array to push node.value
        let result = []
        //initially push root
        queue.push(currentNode)
        while (queue.length) {
            //set current node to first value of queue

            currentNode = queue.shift()
            //push current node to result array
            result.push(currentNode.value)

            if (currentNode.left) {
                //if a left node exists push it to the queue
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                //if a right node exists push it to the queue
                queue.push(currentNode.right)
            }
        }
        return result
    }
    //max/min
    //height
    
}

let tree = new Tree()
tree.insertNode(47)
tree.insertNode(21)
tree.insertNode(76)
tree.insertNode(18)
tree.insertNode(27)
tree.insertNode(52)
tree.insertNode(82)
tree.deleteNode(21)
console.log(tree.BFS())
// console.log(tree)