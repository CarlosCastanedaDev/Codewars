/* Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false
Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array. */

function letterCheck(arr) {
  let lc = arr[1].toLowerCase().split('');
  for (let i = 0; i < lc.length; i++) {
    if (arr[0].toLowerCase().includes(lc[i])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
