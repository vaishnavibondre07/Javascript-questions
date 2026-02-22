//                        ARRAY QUESTIONS 

// **************************** TASK 1 ********************************
// Find Common Names: Write a program to find common names between two lists of names. 
function findCommonNames(list1, list2) {
    const commonNames = [];
    for (let name of list1) {
        if (list2.includes(name)) {
            commonNames.push(name);
        }
    }
    return commonNames;
}

const namesList1 = ["Alice", "Bob", "Charlie", "David"];
const namesList2 = ["Charlie", "David", "Eve", "Frank"];
const commonNames = findCommonNames(namesList1, namesList2);
console.log("Common Names:", commonNames);

// **************************** TASK 2 ********************************
// Find Common Courses: Write a program to find common courses between two students. Each student has a list of courses they are enrolled in.
function findCommonCourses(student1, student2) {
    const commonCourses = [];
    for (let course of student1.courses) {
        if (student2.courses.includes(course)) {
            commonCourses.push(course);
        }  
    }
    return commonCourses;
}
const studentA = { name: "Alice", courses: ["Math", "Science", "History"] };
const studentB = { name: "Bob", courses: ["Science", "Art", "History"] };
const commonCourses = findCommonCourses(studentA, studentB);
console.log("Common Courses:", commonCourses);



// **************************** TASK 3 ********************************
// Search for Favorite Movies: Write a  program to search for a movie title in a list of your favorite movies.
function searchFavoriteMovie(movieList, movieTitle) {
    return movieList.includes(movieTitle);
}   
const favoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight"];
const movieToSearch = "Interstellar";
const isMovieFound = searchFavoriteMovie(favoriteMovies, movieToSearch);
console.log(`Is "${movieToSearch}" in the favorite movies list?`, isMovieFound);


// **************************** TASK 4 ********************************
// Search for Contact in Phonebook: Write a program to search for a contact name in a phonebook.

function searchContact(phonebook, contactName) {
    return phonebook.includes(contactName);
}

const phonebook = ["Alice", "Bob", "Charlie", "David"];
const contactToSearch = "Charlie";
const isContactFound = searchContact(phonebook, contactToSearch);
console.log(`Is "${contactToSearch}" in the phonebook?`, isContactFound);


// **************************** TASK 5 ********************************
// Highest Score: Write a program to find the highest score in a list of student scores.

function findHighestScore(scores) {
    let highestScore = scores[0];
    for (let score of scores) {
        if (score > highestScore) {
            highestScore = score;
        }
    }
    return highestScore;
}

const studentScores = [85, 92, 78, 90, 88];
const highestScore = findHighestScore(studentScores);
console.log("Highest Score:", highestScore);


// **************************** TASK 6 ********************************
// Maximum Temperature: Write a program to find the maximum temperature from a list of daily temperatures.

function findMaximumTemperature(temperatures) {
    let maxTemperature = temperatures[0];
    for (let temp of temperatures) {
        if (temp > maxTemperature) {
            maxTemperature = temp;
        }
    }
    return maxTemperature;
}

const dailyTemperatures = [30, 28, 32, 31, 29];
const maxTemperature = findMaximumTemperature(dailyTemperatures);
console.log("Maximum Temperature:", maxTemperature);


// **************************** TASK 7 ********************************
// Factorial of Daily sales: Write a program to copute the factoial of the sales made each day in weeek.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const dailySales = [1, 2, 3, 4, 5, 6, 7];
const factorials = dailySales.map(sale => factorial(sale));
console.log("Factorials of Daily Sales:", factorials);


// **************************** TASK 8 ********************************
// Generate Fibonacci Sequence: Write a program to generate the Fibonacci sequence up to a certain number of terms and return them in a list.

function generateFibonacci(n) {
    const fibonacciSequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacciSequence.push(0);
        } else if (i === 1) {
            fibonacciSequence.push(1);
        } else {
            const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
            fibonacciSequence.push(nextTerm);
        }

    }
    return fibonacciSequence;
}

const numberOfTerms = 10;
const fibonacciSequence = generateFibonacci(numberOfTerms);
console.log("Fibonacci Sequence:", fibonacciSequence);



// **************************** TASK 9 ********************************
// Find Fibonacci Number in Budget: Write a program to find which Fibonacci number is closest to a given budget amount.

function findClosestFibonacci(budget) {
    let a = 0, b = 1;
    while (b <= budget) {
        const temp = a;
        a = b;
        b = temp + b;
    }
    return a;
}           
const budgetAmount = 100;
const closestFibonacci = findClosestFibonacci(budgetAmount);
console.log("Closest Fibonacci Number to Budget:", closestFibonacci);


// **************************** TASK 10 ********************************
// Check for duplicate Numbers: Write a program to check if there are any duplicate numbers in a list of orders.

function hasDuplicateNumbers(orders) {
    const uniqueOrders = new Set();
    for (let order of orders) {
        if (uniqueOrders.has(order)) {
            return true; // Duplicate found
        }
        uniqueOrders.add(order);
    }
    return false; // No duplicates
}

const orderNumbers = [101, 102, 103, 104, 105, 101];
const hasDuplicates = hasDuplicateNumbers(orderNumbers);
console.log("Are there duplicate order numbers?", hasDuplicates);