//              REVERSE A STRING

// *************************** TASK 1 *****************************
// Reverse a Sentence : Write a program to reverse the characters in each word of a sentence.

function reverseWordsInSentence(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.map(word => word.split("").reverse().join(""));
    return reversedWords.join(" ");
}
const sentence = "Hello World";
const reversedSentence = reverseWordsInSentence(sentence);
console.log(`Original sentence: "${sentence}"`);
console.log(`Reversed sentence: "${reversedSentence}"`);