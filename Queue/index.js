class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue = (data) => {
    this.size++;
    this.queue.push(data);
    return this;
  };

  dequeue = () => {
    this.size--;
    this.queue.shift();
    return this;
  };

  poll = () => {
    if (this.size === 0) return 'List is empty';
    return this.queue[0];
  };

  isEmpty = () => {
    return this.size === 0;
  };

  print = () => {
    if (this.size === 0) return 'List is empty';
    this.queue.forEach((value) => console.log(value + ' '));
    return this;
  };

  clear_ = () => {
    this.size = 0;
    this.queue = [];
  };
}

// const queue = new Queue();

// queue.enqueue(10);
// queue.enqueue(1);
// queue.enqueue(320);
// queue.dequeue();
// console.log(queue);
