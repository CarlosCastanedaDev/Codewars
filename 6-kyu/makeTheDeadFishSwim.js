/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ] */

function parse(data) {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 'i':
        sum += 1;
        break;
      case 'd':
        sum -= 1;
        break;
      case 's':
        sum = Math.pow(sum, 2);
        break;
      case 'o':
        newArr.push(sum);
        break;
    }
  }
  return newArr;
}
