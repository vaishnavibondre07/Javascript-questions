//    CAPTITALIZE THE FIRST LETTER 

// *************************** TASK 1 *****************************
// Title Case a Book Title : Write a program to convert a book title to title case ( captitalize the first letter of each word )

function titleCase(title) {
    const words = title.split(" ");
    const titleCasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return titleCasedWords.join(" ");
}

const bookTitle = "the great gatsby";
const titleCasedTitle = titleCase(bookTitle);
console.log(`Original title: "${bookTitle}"`);
console.log(`Title cased: "${titleCasedTitle}"`);



// *************************** TASK 2 *****************************
// Captitalize Names: Write a program to captitaliz the first letter of each name in a list.

function capitalizeNames(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}
const namesList = ["alice", "bob", "charlie"];
const capitalizedNames = capitalizeNames(namesList);
console.log("Capitalized Names:", capitalizedNames);

