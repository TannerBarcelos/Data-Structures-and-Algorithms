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
    this.increment();
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  };

  // TODO: pop, insertFront, insertBack, insertSorted

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
   *    O(1) Best and worst and average case
   *    @desc | returns this size of the linked list currently
   */
  increment = () => {
    this.size++;
  };

  length = () => {
    return this.size;
  };
}

// Creating a new INSTANCE of the class 'Linked list': this instantiates a new object of the class
const LL = new LinkedList();

LL.push(10);
LL.push(20);
LL.print();
console.log(LL.length());
