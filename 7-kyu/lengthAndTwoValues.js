/* Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  [] */

function alternate(n, firstValue, secondValue) {
  let newArr = [];
  for (let i = 0; i < n / 2; i++) {
    newArr.push(firstValue);
    newArr.push(secondValue);
  }
  return newArr.slice(0, n);
}
