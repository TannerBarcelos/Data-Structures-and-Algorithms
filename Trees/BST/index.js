class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  // We use public methods to then call private methods such that we can access
  // the root of the tree while not exposing it to the outside world: this is called 'encapsulation' or 'data hiding'
  insert = (data) => {
    this.size++;
    if (!this.root) {
      this.root = new Node(data);
    } else {
      const _insert = (node, data) => {
        if (node.data > data) {
          if (!node.left) {
            node.left = new Node(data);
            return;
          }
          _insert(node.left, data);
        }
        if (node.data < data) {
          if (!node.right) {
            node.right = new Node(data);
            return;
          }
          _insert(node.right, data);
        }
      };
      // Call the insert method to insert
      _insert(this.root, data);
    }
  };

  /**
   * The following traversals use a nested function because we cannot pass an array to a recursive function
   * and retain the contents of it across recrusive calls. We nest like this to allow the array to be block scoped and global to the nested function.
   * Instead of printing in the ensted function like we know for the traversals, we push to our output array instead
   */

  // Traverses the tree in inOrder traversal populating an array of that tree inOrder
  dfsInorder = () => {
    let arr = [];
    const _inOrder = (node) => {
      if (node !== null) {
        _inOrder(node.left);
        arr.push(node.data);
        _inOrder(node.right);
      }
    };
    _inOrder(this.root, arr);
    return arr;
  };

  // Traverses the tree in PreOrder traversal populating an array of that tree in PreOrder
  dfsPreOrder = () => {
    const arr = [];
    const _preOrder = (node) => {
      if (node !== null) {
        arr.push(node.data);
        _preOrder(node.left);
        _preOrder(node.right);
      }
    };
    _preOrder(this.root);
    return arr;
  };

  // Traverses the tree in PostOrder traversal populating an array of that tree in PostOrder
  dfsPostOrder = () => {
    const arr = [];
    const _postOrder = (node) => {
      if (node !== null) {
        _postOrder(node.left);
        _postOrder(node.right);
        arr.push(node.data);
      }
    };
    _postOrder(this.root);
    return arr;
  };

  bfs = () => {
    if (!this.root) return;

    const result = [];
    const queue = [];
    queue.push(this.root);
    // While the queue is not empty
    while (queue.length) {
      // Get the front of the queue and remove it and append it to our result array
      let currentNode = queue.shift();
      result.push(currentNode.data);

      // Check if this node has children. If it does, add them to the queue and then continue iteration
      // Make sure you check left then right or vice versa if you want to do reverse
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    // Return the result
    return result;
  };

  // Uses a nested find function with this.root to search left and right tree for the data
  find = (data) => {
    if (!this.root || !data) return false;
    const _find = (node, data) => {
      if (!node) {
        return false;
      } else if (data < node.data) {
        return _find(node.left, data);
      } else if (data > node.data) {
        return _find(node.right, data);
      } else {
        return true;
      }
    };
    return _find(this.root, data);
  };

  getSize = () => this.size;
}

const tree = new BST();
tree.insert(100);
tree.insert(9);
tree.insert(101);
tree.insert(8);
tree.insert(11);

console.log(tree.dfsInorder());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.bfs());
