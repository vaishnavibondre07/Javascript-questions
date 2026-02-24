//     REMOVE DUPLICATE ELEMENTS FROM AN ARRAY

//*************************** TASK 1 *****************************
// Unique Product IDs : Write a peogram to remove duplicate Product IDs from an array and return a new array with only unique elements.

function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
const productIDs = [101, 102, 103, 102, 104, 101, 105];
console.log(removeDuplicates(productIDs));




// *************************** TASK 2 *****************************
// Unique Names: Write a program to remove duplicate names from an array of names and return a new array with only unique names.

function removeDuplicateNames(names) {
    const uniqueNames = [];
    for (let name of names) {
        if (!uniqueNames.includes(name)) {
            uniqueNames.push(name);
        }
    }
    return uniqueNames;
}
const namesArray = ["Alice", "Bob", "Charlie", "Alice", "David", "Bob"];
console.log(removeDuplicateNames(namesArray));