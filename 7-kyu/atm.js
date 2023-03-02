/* An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!! */

function solve(n) {
  if (n % 10 !== 0) return -1;
  let remainder = 0;
  let notes = {
    10: 0,
    20: 0,
    50: 0,
    100: 0,
    200: 0,
    500: 0,
  };
  if (n >= 500) {
    notes['500'] = Math.floor(n / 500);
    remainder = n % 500;
    n = remainder;
  }
  if (n >= 200) {
    notes['200'] = Math.floor(n / 200);
    remainder = n % 200;
    n = remainder;
  }
  if (n >= 100) {
    notes['100'] = Math.floor(n / 100);
    remainder = n % 100;
    n = remainder;
  }
  if (n >= 50) {
    notes['50'] = Math.floor(n / 50);
    remainder = n % 50;
    n = remainder;
  }
  if (n >= 20) {
    notes['20'] = Math.floor(n / 20);
    remainder = n % 20;
    n = remainder;
  }
  if (n >= 10) {
    notes['10'] = Math.floor(n / 10);
  }
  return Object.values(notes).reduce((a, b) => a + b);
}
