/* Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers. */

function cubeOdd(arr) {
  let sum = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) return undefined;
    newArr.push(Math.pow(arr[i], 3));
  }
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] % 2 !== 0) {
      sum += newArr[j];
    }
  }
  return sum;
}
