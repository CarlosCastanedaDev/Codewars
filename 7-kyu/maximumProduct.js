/* Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes . */

function adjacentElementsProduct(array) {
    let newArr = []
    for(let i = 0; i < array.length - 1; i++){
      newArr.push(array[i] * array[i + 1])
      }
    return Math.max(...newArr)
  }



