/* In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  [] */

function twoHighest(arr) {
  let newArr = [...new Set(arr)].sort((a, b) => b - a);
  let arr2 = [];
  if (arr.length === 0) return [];
  if (newArr.length < 2) arr2.push(newArr[0]);
  if (newArr.length >= 2) arr2 = [newArr[0], newArr[1]];
  return arr2;
}
