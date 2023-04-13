/* Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!" */

function remove(str) {
  const words = str.split(/\s+/);
  const newWords = [];
  for (const word of words) {
    if (!/^[^!]*![^!]*$/.test(word)) {
      newWords.push(word);
    }
  }
  return newWords.join(' ');
}
