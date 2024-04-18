// Do you remember the old mobile display keyboards ? Do you also remember how inconvenient it was to write on it ?
//     Well, here you have to calculate how many keystrokes you have to do for a specific word.

// This is the layout:


// Given a string, return the number of keystrokes necessary to type it.You can assume that the input will entirely consist of characters included in the mobile layout(lowercase letters, digits, and the symbols * and #).

//     Examples
// "*#"       => 2(1 + 1)
// "123"      => 3(1 + 1 + 1)
// "abc"      => 9(2 + 3 + 4)
// "codewars" => 26(4 + 4 + 2 + 3 + 2 + 2 + 4 + 5)

function mobileKeyboard(str) {
    let keypad = {
        1: "1234567890*#",
        2: "adgjmptw",
        3: "behknqux",
        4: "cfilorvy",
        5: "sz"
    }
    let keystrokes = 0
    let split = str.split('')
    for (let i = 0; i < split.length; i++) {
        for (let key in keypad) {
            if (keypad[key].includes(split[i])) {
                keystrokes += parseInt(key)
                break
            }
        }
    }
    return keystrokes
}