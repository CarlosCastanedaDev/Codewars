/* Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.  */

function consonantCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!/[aeiou]/gi.test(str[i]) && /[a-z]/gi.test(str[i])) {
      count++;
    }
  }
  return count;
}
