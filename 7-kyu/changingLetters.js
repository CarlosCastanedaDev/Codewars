/* When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata. */

function swap(string) {
  let vowels = 'aeiou';
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
