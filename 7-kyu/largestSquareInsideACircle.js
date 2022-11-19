/* Determine the area of the largest square that can fit inside a circle with radius r. */

function areaLargestSquare(r) {
  let side = Math.sqrt(2) * r;
  return Math.floor(side * side);
}
