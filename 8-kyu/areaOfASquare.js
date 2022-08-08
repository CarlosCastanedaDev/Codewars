/* Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals. */

function squareArea(A){
    let diameter = A * 4/ Math.PI
    let area = Math.pow(diameter/2,2)
    return Number(area.toFixed(2))
  }

