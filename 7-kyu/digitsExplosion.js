/* Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999" */

function explode(s) {
    let str = ''
    let arr = s.split('')
    for(let i = 0; i < s.length; i++){
     if (arr[i] == 1){
       str += '1'
     }else if (arr[i] == 2){
       str += '22'
     }else if (arr[i] == 3){
       str += '333'
     }else if (arr[i] == 4){
       str += '4444'
     }else if (arr[i] == 5){
       str += '55555'
     }else if (arr[i] == 6){
       str += '666666'
     }else if (arr[i] == 7){
       str += '7777777'
     }else if (arr[i] == 8){
       str += '88888888'
     }else if (arr[i] == 9){
       str += '999999999'
     }else{
       str += ''
     }
    }
    return str
  }