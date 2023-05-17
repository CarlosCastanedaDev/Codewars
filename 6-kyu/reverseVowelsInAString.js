/* In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck! */

function reverseVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let strC = [];
  let strV = [];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      strV.push(str[i]);
    } else {
      strC.push(str[i]);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      newStr += strV.pop();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
