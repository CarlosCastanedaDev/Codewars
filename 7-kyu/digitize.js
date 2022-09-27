/* Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9] */

function digitize(n) {
    let newArr = []
    for (let i = 0; i < n.toString().length; i++){
      newArr.push(Number(n.toString()[i]))
    }
    return newArr
  }

