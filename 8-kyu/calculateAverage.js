/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

const find_average = (a) =>
  a.length === 0 ? 0 : a.reduce((a, b) => a + b, 0) / a.length;
