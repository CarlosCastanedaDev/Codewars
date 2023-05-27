/* Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!" */

function battle(x, y) {
  let groupX = 0;
  let groupY = 0;
  for (let i = 0; i < x.length; i++) {
    groupX += x.charCodeAt(i) - 64;
  }
  for (let i = 0; i < y.length; i++) {
    groupY += y.charCodeAt(i) - 64;
  }
  return groupX === groupY ? 'Tie!' : groupX > groupY ? x : y;
}
