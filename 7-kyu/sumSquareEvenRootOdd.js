/* Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck! */

const sumSquareEvenRootOdd = (ns) => {
  let sum = 0;
  for (let i = 0; i < ns.length; i++) {
    if (ns[i] % 2 === 0) {
      sum += Math.pow(ns[i], 2);
    } else {
      sum += Math.sqrt(ns[i]);
    }
  }
  return +sum.toFixed(2);
};

// Refactored Code

const sumSquareEvenRootOdd = (ns) => {
  return +ns
    .map((n) => (n % 2 === 0 ? Math.pow(n, 2) : Math.sqrt(n)))
    .reduce((a, b) => a + b)
    .toFixed(2);
};
