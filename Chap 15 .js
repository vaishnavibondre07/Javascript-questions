//        Find Second Largest Element

// ****************************** TASK 1 *************************************
// Find Second Largest Number in an Array: Write a program to find the second largest number in an array of numbers.

function findSecondLargest(numbers) {
    if (numbers.length < 2) {
        throw new Error("Array must have at least two elements");
    }
    const uniqueNumbers = [...new Set(numbers)];
    if (uniqueNumbers.length < 2) {
        throw new Error("Array must have at least two distinct numbers");
    }
    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers[1];
}

const numbersArray = [10, 5, 8, 20, 15];
const secondLargest = findSecondLargest(numbersArray);
console.log("Second Largest Number:", secondLargest);


// ****************************** TASK 2 *************************************
// Second Fastest Runner: Write a program to find the second fastest runner in a list of race times.

function findSecondFastest(times) {
    if (times.length < 2) {
        throw new Error("Array must have at least two elements");
    }
    const uniqueTimes = [...new Set(times)];
    if (uniqueTimes.length < 2) {
        throw new Error("Array must have at least two distinct times");
    }
    uniqueTimes.sort((a, b) => a - b);
    return uniqueTimes[1];
}

const raceTimes = [12.5, 10.2, 11.8, 9.5, 10.2];
const secondFastest = findSecondFastest(raceTimes);
console.log("Second Fastest Time:", secondFastest);