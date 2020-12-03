# Stack

![stack](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lifo_stack.png/700px-Lifo_stack.png)

### What is a Stack?

- Think of a stack like a stack of pancakes. As you make more pancakes, you add to the stack and then you can take one off from the top to serve to yourself or others until the stack is empty. Or a stack of plates. You have a stack of plates in the shelf and you grab each plate from the top to bottom and serve them. These operations and this idea represents the Abstract Data Type known as a Stack.
- The stack is a LIFO (Last In First Out) data structure that like pancakes or plates, the last piece of data put on top of that stack would be the first one taken off an 'served' (maybe printed or computed some other way)
- A stack is very good way of storing data when you need to keep track of the last thing you saw. For example, the system of cntrl+z on your computer. That same subsystem utilizes a stack to track each thing you last typed and then if you want to revert back to the last set of terms you wrote before the stuff you want to delete, cntrl+z will revert back to the last seen data which would be at the top of the stack and easily seen
- More use cases for a stack are pattern matching for braces ({[]}), etc.

### Operations and their Big O Time Complexity

- Push => O(1)
- Pop => O(1)
- Peek => O(1)
- isEmpty => O(1)
- print => O(N)
- clear => O(1)

- one thing you might notice is we are using the array to imitate the stack and we use the builtin methods with arrays that are named / do the same things? That is because JavaScript is amazing and does all the Queue / Stack operations for us!
- As you can see, stacks are very efficient and provide constant time lookup for almost every operation!

[Here](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>) is a good article about stacks
