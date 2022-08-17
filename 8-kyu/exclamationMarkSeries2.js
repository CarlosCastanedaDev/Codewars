/* Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi" */

function remove (string) {  
    let strArr = string.split('')
     while (strArr[strArr.length - 1] == '!'){
       strArr.pop()
     }
     return strArr.join('')
   }