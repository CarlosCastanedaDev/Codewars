/* In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters. */

function solve(s) {
  let upper = 0;
  let lower = 0;
  let int = 0;
  let special = 0;

  for (let i = 0; i < s.length; i++) {
    if (/[A-Z]/.test(s[i])) {
      upper += 1;
    } else if (/[a-z]/.test(s[i])) {
      lower += 1;
    } else if (/[0-9]/.test(s[i])) {
      int += 1;
    } else {
      special += 1;
    }
  }
  return [upper, lower, int, special];
}
