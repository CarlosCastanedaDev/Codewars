/* Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only */

function computerToPhone(numbers) {
  let newStr = '';
  for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
      case '7':
        newStr += '1';
        break;
      case '8':
        newStr += '2';
        break;
      case '9':
        newStr += '3';
        break;
      case '1':
        newStr += '7';
        break;
      case '2':
        newStr += '8';
        break;
      case '3':
        newStr += '9';
        break;
      default:
        newStr += numbers[i];
    }
  }
  return newStr;
}
