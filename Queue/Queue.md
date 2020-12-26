# Queue

### What is a Queue?

- A Queue is like a stack only the operation style is a tad different versus the stack. In the stack, operations are known to be "Last In First Out" however in a Queue, the operations are "First In First Out" such that the first item added to this queue would be the first removed.
- For the purpose of the repository here, we are going to implement a queue with an array

![queue](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/1280px-Data_Queue.svg.png)

### Goal

- To build a queue and represent what a queue does and how we might use a queue in the real world.

### Operations and their Big O Time Complexity

- Enqueue => O(1)
- Dequeue => O(1) [if using LL. In an array, the dequeue is O(1) but then the whole array needs to be shifted]
- Poll => O(1)
- isEmpty => O(1)
- print => O(N)
- clear => O(1)

### Use Cases

- Some use cases are task management in an OS, reading a BST in Level order, or more concretely, a line for a ride in an amusement park where the first person in line, or at the front, is the first to leave the line and ride (let riding the ride be some operations after utilizing a queue in a problem)
- Games, etc. Knowing when to put some piece of data somewhere else and then the next and the next
