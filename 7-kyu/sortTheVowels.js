// In this kata, we want to sort the vowels in a special format.

//     Task
// Write a function which takes a input string s and return a string in the following way:


// C | R |
//                   | O                          n |
//     D | d |
//     "CODEWARS" =>  | E       "Rnd Te5T"  =>      |
//         W | T |
//                   | A | e
// R | 5 |
//     S | T |

//     Notes:

// List all the Vowels on the right side of |
//     List every character except Vowels on the left side of |
// for the purpose of this kata, the vowels are: a e i o u
// Return every character in its original case
// Each line is seperated with \n
// Invalid input(undefined / null / integer) should return an empty string

function sortVowels(s) {
    let vowels = 'aeiouAEIOU'
    let split
    if (typeof s === 'string') {
        split = s.split('')
    } else {
        return ''
    }

    let str = []
    for (let i = 0; i < split.length; i++) {
        if (split[i] === ' ') {
            str.push(' ' + '|\n')
        }
        else if (vowels.includes(split[i])) {
            str.push('|' + split[i] + '\n')
        } else {
            str.push(split[i] + '|\n')
        }
    }
    return str.join('').slice(0, -1)
}