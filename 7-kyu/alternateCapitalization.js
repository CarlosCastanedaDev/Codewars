/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */

function capitalize(s){
    let even = []
    let odd = []
    for (let i = 0; i < s.length; i++){
      if ( i % 2 == 0){
        even.push(s[i].toUpperCase()) && odd.push(s[i])
      }else {
        even.push(s[i]) && odd.push(s[i].toUpperCase())
      }
    }
    return [even.join(''), odd.join('')]
  }

