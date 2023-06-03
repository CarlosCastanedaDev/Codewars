/* Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Lyrics
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

...and so on...

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

Example
[ "99 bottles of beer on the wall, 99 bottles of beer.",
  "Take one down and pass it around, 98 bottles of beer on the wall.",
  "98 bottles of beer on the wall, 98 bottles of beer.",

  ...and so on...

  "3 bottles of beer on the wall, 3 bottles of beer.",
  "Take one down and pass it around, 2 bottles of beer on the wall.",
  "2 bottles of beer on the wall, 2 bottles of beer.",
  "Take one down and pass it around, 1 bottle of beer on the wall.",
  "1 bottle of beer on the wall, 1 bottle of beer.",
  "Take one down and pass it around, no more bottles of beer on the wall.",
  "No more bottles of beer on the wall, no more bottles of beer.",
  "Go to the store and buy some more, 99 bottles of beer on the wall." ] */

var sing = function () {
  let arr = [];
  for (let i = 99; i >= 0; i--) {
    if (i === 2) {
      arr.push('2 bottles of beer on the wall, 2 bottles of beer.');
      arr.push(
        'Take one down and pass it around, 1 bottle of beer on the wall.'
      );
    } else if (i === 1) {
      arr.push('1 bottle of beer on the wall, 1 bottle of beer.');
      arr.push(
        'Take one down and pass it around, no more bottles of beer on the wall.'
      );
    } else if (i === 0) {
      arr.push('No more bottles of beer on the wall, no more bottles of beer.');
      arr.push(
        'Go to the store and buy some more, 99 bottles of beer on the wall.'
      );
    } else {
      arr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      arr.push(
        `Take one down and pass it around, ${
          i - 1
        } bottles of beer on the wall.`
      );
    }
  }
  return arr;
};
