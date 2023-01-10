/* vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100" */

function vowelOne(s) {
  let string = '';
  for (let i = 0; i < s.length; i++) {
    /[aeiou]/i.test(s[i]) ? (string += '1') : (string += '0');
  }
  return string;
}
