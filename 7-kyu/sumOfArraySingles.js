/* In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck! */

function repeats(arr) {
  let map = {};
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }
  let hash = Object.entries(map);
  for (let j = 0; j < hash.length; j++) {
    if (hash[j][1] === 1) {
      sum += parseInt(hash[j][0]);
    }
  }
  return sum;
}
