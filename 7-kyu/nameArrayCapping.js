/* Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey'] */

function capMe(names) {
  let newStr = '';
  let namesStr = names.join(' ').toLowerCase().split(' ');
  for (let i = 0; i < names.length; i++) {
    newStr += namesStr[i][0].toUpperCase() + namesStr[i].slice(1) + ' ';
  }
  return newStr.trim().split(' ');
}
