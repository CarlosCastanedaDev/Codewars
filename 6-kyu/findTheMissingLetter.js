/* Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!) */

function findMissingLetter(array) {
  let str = array.join('');
  let start = str.charCodeAt(0);
  for (let i = 1; i < array.length; i++) {
    if (str.charCodeAt(i) !== start + 1) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    } else {
      start = str.charCodeAt(i);
      continue;
    }
  }
}
