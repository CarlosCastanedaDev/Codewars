// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

function encryptThis(message) {
    let words = message.split(" ");
    let encryptedMessage = [];

    for (let word of words) {
        if (word.length === 1) {
            encryptedMessage.push(word.charCodeAt(0));
        } else if (word.length === 2) {
            encryptedMessage.push(word.charCodeAt(0) + word.charAt(1));
        } else {
            let encryptedWord = word.charCodeAt(0) + word.slice(-1) + word.slice(2, -1) + word.charAt(1);
            encryptedMessage.push(encryptedWord);
        }
    }

    return encryptedMessage.join(" ");
}
