/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */

function alphabetPosition(text) {
  let newStr = '';
  let lCase = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (lCase.charCodeAt(i) < 123 && lCase.charCodeAt(i) > 96) {
      newStr += ` ${lCase.charCodeAt(i) - 96}`;
    }
  }
  return newStr.trim();
}
