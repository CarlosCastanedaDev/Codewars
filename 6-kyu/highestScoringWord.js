/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

function high(x) {
  let score1 = 0;
  let score2 = 0;
  let word = '';
  let split = x.split(' ');
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split[i].length; j++) {
      score2 += split[i].charCodeAt(j) - 96;
    }
    if (score2 > score1) {
      score1 = score2;
      word = split[i];
      score2 = 0;
    } else {
      score2 = 0;
    }
  }
  return word;
}
