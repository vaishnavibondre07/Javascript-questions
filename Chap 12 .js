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


// *************************** TASK 2 *****************************
// Palindrome Checker : Write a program to check if a given string is a palindrome (reads the same backward as forward).

function isPalindrome(str) {

    const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

const testString = "A man a plan a canal Panama";
const result = isPalindrome(testString);
console.log(`Is "${testString}" a palindrome? ${result}`);


// *************************** TASK 3 *****************************
// Reverse Words in a String: Write a program to reverse the order of words in a string

function reverseWordOrder(str) {
    const words = str.split(" ");
    const reversedWords = words.reverse();
    return reversedWords.join(" ");
}

const inputString = "Hello World from JavaScript";
const reversedWordOrder = reverseWordOrder(inputString);
console.log(`Original string: "${inputString}"`);
console.log(`Reversed word order: "${reversedWordOrder}"`);