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
        this.root = null
    }
    //invert binary tree
    invert(): void {
        this._invert(this.root)
    }
    private _invert(root: TNode | null): void {
        if(!root) return
        const temp = root.left
        root.left = root.right
        root.right = temp
        this._invert(root.left)
        this._invert(root.right)
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
    //breadth first search
    BFS(): number[] {
        let result: number[] = []
        if (!this.root) return result
        let queue: TNode[] = [this.root]

        while (queue.length) {
            let current = queue.shift()
            if (current) result.push(current.data)
            if (current?.left) queue.push(current.left)
            if (current?.right) queue.push(current.right)
        }
        return result
    }
    //depth first search
    //postorder traversal
    postOrder(): number[] {
        return this._postOrder(this.root)
    }
    private _postOrder(root: TNode | null): number[] {
        let result: number[] = []
        if (!root) return result

        result = result.concat(this._postOrder(root.left))
        result = result.concat(this._postOrder(root.right))
        result.push(root.data)

        return result

    }
    //preorder traversal
    preOrder(): number[] {
        return this._preOrder(this.root)
    }
    private _preOrder(root: TNode | null): number[] {
        let result: number[] = []
        if (!root) return result

        result.push(root.data)
        result = result.concat(this._preOrder(root.left))
        result = result.concat(this._preOrder(root.right))

        return result

    }
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
    max(): number | undefined {
        return this._max(this.root)
    }
    //max helper function
    _max(root: TNode | null): number | undefined {
        if (!root?.right) return root ? root.data : undefined
        return this._max(root.right)
    }
}
let tree = new BTree()
tree.insert(5)
tree.insert(1)
tree.insert(10)
let bfs = tree.BFS()
console.log(bfs)
tree.invert()
let invert = tree.BFS()
console.log(invert)

