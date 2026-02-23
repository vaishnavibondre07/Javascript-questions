// *************************** TASK 1 *****************************
// Find a Specific Book: Write a program to find the index of the book "Harry Potter" in the sorted array of book.

function findBookIndex(bookList, bookTitle) {
    for (let i = 0; i < bookList.length; i++) {
        if (bookList[i].toLowerCase() === bookTitle.toLowerCase()) {
            return i; 
        }
    }   
    return -1;
}
const sortedBooks = [
    "A Tale of Two Cities",
    "Harry Potter",
    "Moby Dick",
    "Pride and Prejudice",
    "The Great Gatsby", 
    "The Lord of the Rings",
    "The Alchemist",
    "To Kill a Mockingbird",
    "War and Peace",
    "Wuthering Heights"
];

const bookTitleToFind = "Harry Potter";
const bookIndex = findBookIndex(sortedBooks, bookTitleToFind);
if (bookIndex !== -1) {
    console.log(`The book "${bookTitleToFind}" is found at index ${bookIndex} in the sorted book list.`);
} else {
    console.log(`The book "${bookTitleToFind}" is not found in the sorted book list.`);
}




// *************************** TASK 2 *****************************
// Library Management System: Write a program to determine if a book title "The Alchemist" is available in the library's sorted book list.

function isBookAvailable(bookList, bookTitle) {
    for (let book of bookList) {
        if (book.toLowerCase() === bookTitle.toLowerCase()) {
            return true; 
        }
    }   
    return false;
}
const libraryBooks = [
    "A Tale of Two Cities",
    "Harry Potter",
    "Moby Dick",
    "Pride and Prejudice",
    "The Great Gatsby", 
    "The Lord of the Rings",
    "The Alchemist",
    "To Kill a Mockingbird",
    "War and Peace",
    "Wuthering Heights"
];

const bookTitleToCheck = "The Alchemist";
const isAvailable = isBookAvailable(libraryBooks, bookTitleToCheck);
if (isAvailable) {
    console.log(`The book "${bookTitleToCheck}" is available in the library.`);
} else {
    console.log(`The book "${bookTitleToCheck}" is not available in the library.`);
}   