class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   *    Time:
   *    Best Case: O(1) if list is empty
   *    Avg Case: O(N)
   *    @param data | data to be inserted into the linked list
   */
  push = (data) => {
    this.size++;
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      if (this.head.data === data) {
        this.head = this.head.next;
      }
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  };

  /**
   *    Time:
   *    Best Case: O(1) if list is empty
   *    Avg Case: O(N)
   *    @param data | data to be removed anywhere in the list
   */
  remove = (data) => {
    if (!this.head) return null;

    // If the head is to be removed
    if (this.head.data === data) {
      this.size--;
      this.head = this.head.next;
      return this;
    }

    // Else the item MIGHT exist somewhere after head to the end so find it using trailing and traveling pointer approach
    let previous = null;
    let curr = this.head;

    // Traverse while we have not found the data and we are not at the end of the list
    while (curr.data !== data && curr.next) {
      previous = curr;
      curr = curr.next;
    }
    if (curr.data === data) {
      this.size--;
      previous.next = curr.next;
      curr = null;
      return this;
    } else {
      return 'Item not found';
    }
  };

  /**
   *    Time:
   *    Best Case: O(1) if list is empty
   *    Avg Case: O(1)
   *    @param data | data to be inserted into the linked list at the front
   */
  insertFront = (data) => {
    this.size++;
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  };

  /**
   *    Time:
   *    Best Case: O(1) if list is empty
   *    Avg Case: O(N)
   *    @param data | data to be inserted into the linked list at the back
   */
  insertBack = (data) => {
    this.size++;
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    return this;
  };

  /**
   *    Time:
   *    Best Case: O(1) if list is empty
   *    Avg Case: O(N)
   *    @param data | data to be inserted into the linked list @ pos
   */
  insert = (pos, data) => {
    if (pos > this.size || pos < 0) return 'Insert position out of range';

    // If pos is == to the size of the list, push on
    if (pos === this.size) {
      this.push(data);
      this.size++;
      return this;
    }

    // If pos is == 0, insert at the front
    if (pos === 0) {
      this.insertFront(data);
      this.size++;
      return this;
    }
    // Else, it is to be inserted between the (front and end), so we find that position simply with a counter
    this.size++;
    let newNode = new Node(data);
    let curr = this.head.next;
    let temp = this.head;
    let count = 1;
    while (count < pos) {
      temp = curr;
      curr = curr.next;
      count++;
    }
    temp.next = newNode;
    newNode.next = curr;
  };

  /**
   *    Time:
   *    Best Case: O(1) if list is empty or item is at front
   *    Avg Case: O(N)
   *    @desc | gets an element by "index position"
   */
  get = (pos) => {
    // if the pos is out of range
    if (pos < 0 || pos > this.size) {
      return null;
    }

    // Find the value at the position
    let index = 0;
    let curr = this.head;
    while (index !== pos) {
      curr = curr.next;
      index++;
    }
    return curr.data;
  };

  /**
   *    Time:
   *    Best Case: O(1) if list is empty
   *    Avg Case: O(N)
   *    @desc | prints all elements in the linked list
   */
  print = () => {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  };

  /**
   *    Time:
   *    Best Case: O(1) if list is empty
   *    Avg Case: O(1)
   *    @desc | returns the size of the list
   */
  length = () => {
    return this.size;
  };
}

// Creating a new INSTANCE of the class 'Linked list': this instantiates a new object of the class
const LL = new LinkedList();

LL.push(10);
LL.push(20);
LL.push(50);
LL.push(-4);
LL.insert(0, 100);
LL.remove(50);
console.log(LL.get(2));
LL.remove(10);
LL.print();
