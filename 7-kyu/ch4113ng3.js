/* Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s" */

function nerdify(txt) {
  let newStr = '';
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === 'a' || txt[i] === 'A') {
      newStr += '4';
    } else if (txt[i] === 'e' || txt[i] === 'E') {
      newStr += '3';
    } else if (txt[i] === 'l') {
      newStr += '1';
    } else {
      newStr += txt[i];
    }
  }
  return newStr;
}
