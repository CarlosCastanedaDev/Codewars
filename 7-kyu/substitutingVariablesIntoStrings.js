/* Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005" */

function solution(value) {
  let newVal = value.toString().split('');
  while (newVal.length < 5) {
    newVal.unshift('0');
  }
  return `Value is ${newVal.join('')}`;
}
