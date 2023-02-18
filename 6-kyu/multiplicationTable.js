/* Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]] */

function multiplicationTable(size) {
  let table = [];
  for (let i = 0; i < size; i++) {
    table[i] = [];
  }
  for (let j = 1; j <= size; j++) {
    for (let k = 1; k <= size; k++) {
      table[j - 1].push(j * k);
    }
  }
  return table;
}
