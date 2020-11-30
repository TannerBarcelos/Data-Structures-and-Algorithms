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
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
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
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let newNode = new Node(data);
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
   *    @param data | data to be inserted into the linked list in ascending sorted order
   */
  insertSorted = (data) => {
    this.size++;
    let newNode = new Node(data);
    if (!this.head) {
      this.insertFront(data);
    }
    if (this.head.data > data) {
      newNode.next = this.head;
      this.head = newNode;
    }

    let previous = null;
    let curr = this.head;

    // traverse while not at the end of the list
    while (curr.next) {
      // If the current value is no longer < data to insert, this is the insert position
      if (curr.data > data) {
        previous.next = newNode;
        newNode.next = curr;
        break;
      }
      previous = curr;
      curr = curr.next;
    }
    if (!curr.next) {
      this.insertBack(data);
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
    let newNode = new Node(data);

    // Position is 0 so insert at front of the list
    if (pos === 0) {
      this.insertFront(data);
      this.size++;
      return this;
    }

    // Position is length of list so insert at the back
    if (pos === this.size) {
      this.insertBack(data);
      this.size++;
      return this;
    }

    // Position is somewhere between (0, ll.size)
    let previous = null;
    let curr = this.head;
    let count = 0;
    while (count < pos && curr.next) {
      count++;
      previous = curr;
      curr = curr.next;
    }
    previous.next = newNode;
    newNode.next = curr;

    this.size++;
    return this;
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
console.log(LL);
console.log(LL.insert(2, 4));
LL.insertBack(101);
LL.print();
