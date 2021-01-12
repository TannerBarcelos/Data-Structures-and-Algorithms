// Fib not using DP
// const fib = (N) => {
//   if (N <= 2) return 1;
//   return fib(N - 1) + fib(N - 2);
// };

// Horrible time: 2^N (exponential) and O(N) space

// console.log(fib(6));

// Fib using DP - optimal! O(N) time and space [this approach is called bottom-up or tabulation]
// const fibDP = (N) => {
//   const cache = {
//     0: 0,
//     1: 1,
//     2: 1,
//   };

//   if (N < 3) return cache[N];

//   for (let i = 3; i <= N; i++) {
//     cache[i] = cache[i - 1] + cache[i - 2];
//   }
//   return cache[N];
// };

// console.log(fibDP(9));

// O(N) time but O(1) space : most optimal
const fibDPOp = (N) => {
  if (N < 2) return N;

  let p1 = 0,
    p2 = 1,
    curr = 2;

  while (curr <= N) {
    let temp = p2;
    p2 = p2 + p1;
    p1 = temp;
    curr++;
  }
  return p2;
};

console.log(fibDPOp(6));

// I am a fan of the DP and the DP O(1) space solutions and they will pass the interview
