//Binary Tree
var TNode = /** @class */ (function () {
    function TNode(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return TNode;
}());
var BTree = /** @class */ (function () {
    function BTree() {
        this.root = null;
    }
    //insert node
    BTree.prototype.insert = function (value) {
        this.root = this._insert(this.root, value);
    };
    // Helper function for inserting a node
    BTree.prototype._insert = function (root, value) {
        if (root === null) {
            // If the tree is empty, create a new node as the root
            return new TNode(value, null, null);
        }
        // Recursively insert the node based on the value
        if (value < root.data) {
            root.left = this._insert(root.left, value);
        }
        else if (value > root.data) {
            root.right = this._insert(root.right, value);
        }
        return root;
    };
    //search for node value (return true if found else false)
    BTree.prototype.find = function (value) {
        return this._find(this.root, value);
    };
    BTree.prototype._find = function (root, value) {
        if (root == null)
            return false;
        if (value === (root === null || root === void 0 ? void 0 : root.data))
            return true;
        if (value < (root === null || root === void 0 ? void 0 : root.data))
            return this._find(root === null || root === void 0 ? void 0 : root.left, value);
        if (value > (root === null || root === void 0 ? void 0 : root.data))
            return this._find(root === null || root === void 0 ? void 0 : root.right, value);
        return false;
    };
    //depth first search
    //inorder traversal
    BTree.prototype.inOrder = function () {
        return this._inOrder(this.root);
    };
    //helper function for inOrder traversal
    BTree.prototype._inOrder = function (root) {
        var result = [];
        if (!root)
            return result;
        result = result.concat(this._inOrder(root.left));
        result.push(root.data);
        result = result.concat(this._inOrder(root.right));
        return result;
    };
    //return max value of tree
    BTree.prototype.max = function () {
        return this._max(this.root);
    };
    //max helper function
    BTree.prototype._max = function (root) {
        if (!(root === null || root === void 0 ? void 0 : root.right))
            return root ? root.data : undefined;
        return this._max(root.right);
    };
    return BTree;
}());
var tree = new BTree();
tree.insert(5);
tree.insert(10);
tree.insert(15);
tree.insert(1);
var result = tree.inOrder();
var max = tree.max();
console.log(max);
console.log(result);
