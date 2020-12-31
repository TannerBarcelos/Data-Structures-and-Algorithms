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
    thiis.size = 0;
  }

  // We use public methods to then call private methods such that we can access
  // the root of the tree while not exposing it to the outside world: this is called 'encapsulation' or 'data hiding'
  insert(data) {
    this._insert(data);
  }

  _insert(data) {
    if (!root) {
      this.root = new Node(data);
    }
  }
}

const tree = new BST();
