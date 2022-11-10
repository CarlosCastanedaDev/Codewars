/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski" */

function correctPolishLetters(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'ą':
        newStr += 'a';
        break;
      case 'ć':
        newStr += 'c';
        break;
      case 'ę':
        newStr += 'e';
        break;
      case 'ł':
        newStr += 'l';
        break;
      case 'ń':
        newStr += 'n';
        break;
      case 'ó':
        newStr += 'o';
        break;
      case 'ś':
        newStr += 's';
        break;
      case 'ź':
        newStr += 'z';
        break;
      case 'ż':
        newStr += 'z';
        break;
      default:
        newStr += string[i];
    }
  }
  return newStr;
}
