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