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
  insert(data) {
    this.size++;
    // If tree is empty, insert
    if (!this.root) {
      this.root = new Node(data);
    } else {
      // else use the root and a helper method to get the insertion point
      this._insert(this.root, data);
    }
  }

  _insert(node, data) {
    if (node.data > data) {
      if (!node.left) {
        node.left = new Node(data);
        return;
      }
      this._insert(node.left, data);
    }
    if (node.data < data) {
      if (!node.right) {
        node.right = new Node(data);
        return;
      }
      this._insert(node.right, data);
    }
  }

  dfsInorder() {
    this._inOrder(this.root);
  }
  _inOrder(node) {
    if (node !== null) {
      this._inOrder(node.left);
      console.log(node.data);
      this._inOrder(node.right);
    }
  }
  dfsPreOrder() {
    this._preOrder(this.root);
  }
  _preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this._inOrder(node.left);
      this._inOrder(node.right);
    }
  }

  dfsPostOrder() {
    this._postOrder(this.root);
  }
  _postOrder(node) {
    if (node !== null) {
      this._inOrder(node.left);
      this._inOrder(node.right);
      console.log(node.data);
    }
  }
}

const tree = new BST();
tree.insert(100);
tree.insert(9);
tree.insert(101);
tree.insert(8);
tree.insert(11);

tree.dfsInorder();
console.log('\n\n');
tree.dfsPreOrder();
console.log('\n\n');
tree.dfsPostOrder();
