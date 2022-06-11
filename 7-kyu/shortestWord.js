//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.

function findShort(s){
    let newArr = s.split(' ')
    let wordLength = []
      for(i = 0; i < newArr.length; i++){
          wordLength.push(newArr[i].length)
        }
          wordLength.sort((a,b) => a - b)
      return wordLength[0]
  }