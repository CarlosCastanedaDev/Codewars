/* Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0. */

function evenLast(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      sum += numbers[i];
    }
  }
  return numbers.length === 0 ? 0 : sum * numbers[numbers.length - 1];
}
