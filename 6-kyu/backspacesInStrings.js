/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  "" */

function cleanString(s) {
  const stack = [];
  for (const char of s) {
    if (char === '#') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}
