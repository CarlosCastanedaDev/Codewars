/* Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid. */

function switcher(x) {
  let str = '';
  for (let i = 0; i < x.length; i++) {
    switch (x[i]) {
      case '27':
        str += '!';
        break;
      case '28':
        str += '?';
        break;
      case '29':
        str += ' ';
        break;
      default:
        str += String.fromCharCode(26 - parseInt(x[i]) + 97);
    }
  }
  return str;
}
