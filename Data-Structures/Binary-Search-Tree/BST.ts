//Binary Tree

class TNode {
    public data: number
    public left: TNode | null
    public right: TNode | null
    constructor(data: number, left: TNode | null, right: TNode | null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class BTree {
    public root: TNode | null

    constructor() {
        this.root =null 
    }
    //insert node
    insert(value: number) {
        this.root = this._insert(this.root, value)
    }
    // Helper function for inserting a node
    private _insert(root: TNode | null, value: number): TNode {
        if (root === null) {
            // If the tree is empty, create a new node as the root
            return new TNode(value, null, null);
        }

        // Recursively insert the node based on the value
        if (value < root.data) {
            root.left = this._insert(root.left, value);
        } else if (value > root.data) {
            root.right = this._insert(root.right, value);
        }

        return root;
    }
    //search for node value (return true if found else false)
    find(value: number): boolean {
        return this._find(this.root, value)
    }
    private _find(root: TNode | null, value: number): boolean {
        if (root == null) return false
        if (value === root?.data) return true
        if (value < root?.data) return this._find(root?.left, value)
        if (value > root?.data) return this._find(root?.right, value)
        return false
    }

    //depth first search
    //inorder traversal
    inOrder(): number[] {
        return this._inOrder(this.root)
    }
    //helper function for inOrder traversal
    private _inOrder(root: TNode | null): number[] {
        let result: number[] = []
        if (!root) return result

        result = result.concat(this._inOrder(root.left))
        result.push(root.data)
        result = result.concat(this._inOrder(root.right))

        return result
    }
    //return max value of tree
    max():number|undefined{
        return this._max(this.root)
    }
    //max helper function
    _max(root:TNode|null):number|undefined{
        if(!root?.right) return root ? root.data :undefined
            return this._max(root.right)
    }
}

let tree = new BTree()
tree.insert(5)
tree.insert(10)
tree.insert(15)
tree.insert(1)

const result = tree.inOrder()
const max = tree.max()
console.log(max)
console.log(result)
