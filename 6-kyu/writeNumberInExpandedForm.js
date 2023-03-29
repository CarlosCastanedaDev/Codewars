/* You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num) {
  let numStr = num.toString();
  let newStr = [];
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === '0') {
      continue;
    } else if (i === numStr.length - 1) {
      newStr.push(numStr[i]);
    } else {
      newStr.push(numStr[i] + '0'.repeat(numStr.length - 1 - i));
    }
  }
  return newStr.join(' + ');
}
