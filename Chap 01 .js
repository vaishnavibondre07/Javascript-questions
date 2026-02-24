//                                CHECK EVEN OR ODD NUMBER



// ****************************** TASK 1 *******************************
// Counting Stairs: Write a program to deterrmine if the top of the step of a staircase with n steps is even or odd. The program should take the number of steps as input and output "Even" if the top step is even, and "Odd" if the top step is odd.

function countStairs(n) {
    if (n % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const numberOfSteps = 56
const result = countStairs(numberOfSteps);
console.log(`The top step of a staircase with ${numberOfSteps} steps is: ${result}`);



// ****************************** TASK 2 *******************************
// Fair Share: Write a program to check if you and a friend can have equal number of cookies from a given total number of coookies

function fairShare(totalCookies) {
    if (totalCookies % 2 === 0) {
        return "Yes, you can have equal number of cookies.";
    } else {
        return "No, you cannot have equal number of cookies.";
    }       
}

const totalCookies = 7
const Result = fairShare(totalCookies);
console.log(`With a total of ${totalCookies} cookies, ${Result}`);


// ****************************** TASK 3 *******************************
// Check Multiple Numbers: Write a program to check if each number in a given list is even or  odd.

function checkMultipleNumbers(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return `${num} is Even`;
        } else {
            return `${num} is Odd`;
        }
    }); 
}

const numberList = [1, 2, 3, 4, 5, 6];
const results = checkMultipleNumbers(numberList);
results.forEach(result => console.log(result));