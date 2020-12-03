# Linked List

### What is a Linked List?

- Linked lists are like arrays when it comes to 'listing of data' and working with computer memory however the key difference is the memory being allocated and worked on in a Linked List is NOT adjacent in memory like Arrays are so there is no indexing or random access in O(1) time allowed unless some special cases I mention in the next bullet
- A linked list contains an object called a 'Node' which holds data about that node and then a pointer (reference) to another node somewhere in memory. Note my verbage here. 'Somewhere' is key. In an array, the next piece of data could be 4 bytes away adjacent to the value currently being looked at however in a Linked List, the next piece of data could be a memory location away or somewhere completely random!
- Because of this, we need to traverse a list no matter what to ALWAYS find information in it, print its values, etc. And we have no constant time methods associated with it unless we simply want to get the head (front of the list) or tail (end of the list IF you are tracking a tail node)
- Linked Lists are powerful in that you can be a lot more flexible with memory however the trade off is you lose potential efficiency that you can get in an array

### What is a 'Node' again?

Here is a good diagram<br>
![Here is a good diagram of what a node is](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/816px-Singly-linked-list.svg.png)

- As seen, we can diagram this idea of a node as a rectange with two boxes in it. One containing some data (Number, String, another object, you name it!) and a pointer to the next node in the list
- The thing to remember is, these nodes are just objects that will exist in memory that are linked together using pointers which are simply references to other memory locations which house that next node

### Goal

- By building these nodes and connecting them, we can establish this structure of a list and store data without needing to care about the size of the list.
- The nice thing about JavaScript though is that arrays are also very flexible with memory unlike C++ where you need to allocate N bytes of memory and then re-allocate and extend if needed. Javascript does that under the hood which essentially does what a linked list offers!

### Operations and their Big O Time Complexity

- push => Best Case: O(1) [if list is empty]. Average Case O(N) [unless tracking tail]
- remove => Best Case: O(1) [if list is length 1] . Average Case O(N)
- insertFront => O(1)
- insertBack => Best Case O(1) [empty list] . Average Case O(N)
- insert => Best Case O(1) [list is empty] . Average Case O(N)
- get => Best Case O(1) [empty list or length 1] . Average Case O(N)
- print => Best Case O(1) [list is empty or length 1] . Average Case O(N)
- length => O(1)

### Use Cases

There is no real answer here. You might find that a linked list is better to use than array for some application, maybe legacy code apps are built with the logic and you as a developer need to maintain it. The possibilities are endless and the cool thing about them is that there are many variations! One of which called a doubly linked list where each node can point to its predecessor and its successor in the list so you can move freely through the list. This is seen as the more optimal and preferred Linked List implementation
