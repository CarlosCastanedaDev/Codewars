/* Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

For example:

toLeetSpeak("LEET") returns "1337"
In this kata we use a simple LeetSpeak dialect. Use this alphabet:

{
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
} */

function toLeetSpeak(str) {
  let leetStr = '';
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'A':
        leetStr += '@';
        break;
      case 'B':
        leetStr += '8';
        break;
      case 'C':
        leetStr += '(';
        break;
      case 'D':
        leetStr += 'D';
        break;
      case 'E':
        leetStr += '3';
        break;
      case 'F':
        leetStr += 'F';
        break;
      case 'G':
        leetStr += '6';
        break;
      case 'H':
        leetStr += '#';
        break;
      case 'I':
        leetStr += '!';
        break;
      case 'J':
        leetStr += 'J';
        break;
      case 'K':
        leetStr += 'K';
        break;
      case 'L':
        leetStr += '1';
        break;
      case 'M':
        leetStr += 'M';
        break;
      case 'N':
        leetStr += 'N';
        break;
      case 'O':
        leetStr += '0';
        break;
      case 'P':
        leetStr += 'P';
        break;
      case 'Q':
        leetStr += 'Q';
        break;
      case 'R':
        leetStr += 'R';
        break;
      case 'S':
        leetStr += '$';
        break;
      case 'T':
        leetStr += '7';
        break;
      case 'U':
        leetStr += 'U';
        break;
      case 'V':
        leetStr += 'V';
        break;
      case 'W':
        leetStr += 'W';
        break;
      case 'X':
        leetStr += 'X';
        break;
      case 'Y':
        leetStr += 'Y';
        break;
      case 'Z':
        leetStr += '2';
        break;
      case ' ':
        leetStr += ' ';
        break;
    }
  }
  return leetStr;
}
