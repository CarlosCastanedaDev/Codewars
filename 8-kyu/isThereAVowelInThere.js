/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

function isVow(a){
    let newArr = []
    
    for (let i = 0; i < a.length; i++){
      if (a[i] === 97){
        newArr.push('a')
      }else if (a[i] === 101){
        newArr.push('e')
      }else if (a[i] === 105){
        newArr.push('i')
      }else if (a[i] === 111){
        newArr.push('o')
      }else if (a[i] === 117){
        newArr.push('u')
      }else {
        newArr.push(a[i])
      }
    }
      return newArr
    }