class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  //invert binary tree
  invert(){
    this,this._invert(this.root);
  }
  _invert(node){
    if(!node){
      return;
    }
    //swap left and right subtrees
    const temp = node.left;
    node.left=node.right;
    node.right = temp;
    this._invert(node.left)
    this._invert(node.right)
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
    return this._find(this.root, data);
  }
  _find(node, data) {
    if (node === null) {
      return false;
    }
    if (node.value === data) {
      return true;
    } else if (data > node.value) {
      return this._find(node.right, data);
    } else if (data < node.value) {
      return this._find(node.left, data);
    }
  }
  //traversal
  //DFS
  preOrder() {
    let result = [];

    if (!this.root) {
      return;
    }

    function traverse(currentNode) {
      result.push(currentNode.value);
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }
    traverse(this.root);

    return result;
  }
  postOrder() {
    let result = [];

    if (!this.root) {
      return;
    }

    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      result.push(currentNode.value);
    }

    traverse(this.root);
    return result;
  }

  inOrder() {
    let result = [];
    if (!this.root) {
      return;
    }
    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      result.push(currentNode.value);
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }

    traverse(this.root);
    return result;
  }
  //BFS

  BFS() {
    if (!this.root) {
      return [];
    }
    let currentNode = this.root;
    //array to hold nodes
    let queue = [];
    //array to push node.value
    let result = [];
    //initially push root
    queue.push(currentNode);
    while (queue.length) {
      //set current node to first value of queue

      currentNode = queue.shift();
      //push current node to result array
      result.push(currentNode.value);

      if (currentNode.left) {
        //if a left node exists push it to the queue
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        //if a right node exists push it to the queue
        queue.push(currentNode.right);
      }
    }
    return result;
  }

  //finding the minimum value of the tree
  min() {
    return this._min(this.root);
  }
  _min(currentNode) {
    if (!currentNode.left) {
      return currentNode.value;
    } else {
      return this._min(currentNode.left);
    }
  }
  //finding the maximum value of the tree
  max() {
    return this._max(this.root);
  }
  _max(currentNode) {
    if (!currentNode.right) {
      return currentNode.value;
    } else {
      return this._max(currentNode.right);
    }
  }
  //height
  height() {
    return this._height(this.root);
  }
  _height(currentNode) {
    if (!currentNode) {
      return 0;
    }
    let leftHeight = this._height(currentNode.left);
    let rightHeight = this._height(currentNode.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

