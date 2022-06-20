// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let xArr = x.toLowerCase().split('')
    return xArr.join('') === xArr.reverse().join('')
  }