// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// productArray ({1,5,2}) ==> return {10,2,5}
// Explanation:
// The first element 10 is the product of all array's elements except the first element 1

// The second element 2 is the product of all array's elements except the second element 5

// The Third element 5 is the product of all array's elements except the Third element 2.

function productArray(numbers){
  let arr = []
  let product = 1
  for (let i = 0; i < numbers.length; i++){
    for (let j = 0; j < numbers.length; j++){
      if (i !== j) {
        product *= numbers[j]
      }
    }
    arr.push(product)
    product = 1
  }
  return arr
}
