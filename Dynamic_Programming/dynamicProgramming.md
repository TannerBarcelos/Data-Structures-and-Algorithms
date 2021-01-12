# Dynamic Programming

#### This stuff is not easy. But it is very important. Learning this integral and should be taken slowly

### What is it?

- It is a method for solving some problems by breaking down the problem into simpler subproblems solving each subproblem once and then caching (storing) the computation result to be used later to save time and space in a solution.

### How to identify a problem that uses this approach?

- **Overlapping sub-problems**
  - Example question:
    - Fibonacci Sequence: we can cache past-computed fib(n) sub-problems such that we do not need to repeat computation but instead search our cache for that computation that may have happened in the past
- **Optimal Substructure**
  - Example question:
    - Shortest path in a directed graph: a problem like this that asks "optimal" or "combinations" can often be solved using dynamic programming because we can compute the optimal sub-problems using our caching mechanism to help solve sub-problems to our ultimate solutions
