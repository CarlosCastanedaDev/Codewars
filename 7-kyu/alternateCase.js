/* Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD */

function alternateCase(s) {
  let string = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      string += s[i].toUpperCase();
    } else {
      string += s[i].toLowerCase();
    }
  }
  return string;
}
