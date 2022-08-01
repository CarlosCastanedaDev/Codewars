/* Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!" */

function replace(s){
    let newArr = s.split('')
    for (let i = 0; i < s.length; i++){
      if (newArr[i] == 'a' ||newArr[i] == 'e' || newArr[i] == 'i' || newArr[i] == 'o' || newArr[i] == 'u'){
        newArr.splice(i, 1,'!')
      }else if (newArr[i] == 'A' ||newArr[i] == 'E' || newArr[i] == 'I' || newArr[i] == 'O' || newArr[i] == 'U'){
        newArr.splice(i, 1,'!')
      }
    }
    return newArr.join('')
  }