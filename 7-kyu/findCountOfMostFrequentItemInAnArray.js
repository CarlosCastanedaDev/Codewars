/* Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times. */

function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;
  let map = {};
  for (let i = 0; i < collection.length; i++) {
    if (map[collection[i]] !== undefined) {
      map[collection[i]]++;
    } else {
      map[collection[i]] = 1;
    }
  }
  let arr = Object.values(map);
  return Math.max(...arr);
}
