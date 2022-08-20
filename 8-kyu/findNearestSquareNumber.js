// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

function nearestSq(n){
    let sqrt = Math.round(Math.sqrt(n))
    return sqrt * sqrt
  }