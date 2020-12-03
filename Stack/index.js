class Stack {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  push = (data) => {
    this.size++;
    this.data.push(data);
  };

  pop = () => {
    if (this.size === 0) return undefined;
    this.size--;
    return this.data.pop();
  };

  peek = () => {
    return this.data[this.size - 1];
  };

  isEmpty = () => {
    return this.size === 0;
  };

  clear = () => {
    this.data = [];
  };

  print = () => {
    let i = -1;
    while (i < this.size) {
      console.log(this.data[i++]);
    }
  };
}

const stack = new Stack();
stack.push(10);
stack.push(101);
stack.push(-1);
stack.print();
