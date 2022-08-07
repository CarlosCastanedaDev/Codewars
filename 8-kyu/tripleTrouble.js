/* Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length. */

function tripleTrouble(one, two, three){
    let str = []
    let oneArr = one.split('')
    let twoArr = two.split('')
    let threeArr = three.split('')
    for (let i = 0; i < one.length; i++){
      str.push(oneArr[i])
      str.push(twoArr[i])
      str.push(threeArr[i])
    }
    return str.join('')
   }