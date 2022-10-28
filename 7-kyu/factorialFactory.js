/* In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

Note: 0! is always equal to 1. Negative values should return null; */

function factorial (n) {
    let product = 1
    if(n === 0){
      return 1
    }
    if(n < 0){
      return null
    }
    for(let i = 1; i <= n; i++){
      product *= i
    }
    return product
  }

