//                     LOOPS AND CONDITIONAL STATEMENTS 

// ****************************** TASK 1 *******************************
// Find the Leader: Write a prgram to find the team leadre from an array of team members. The Leadervis identified by having isLeader property set to true.

function findTeamLeader(teamMembers) { 
    for (let member of teamMembers) {
        if (member.isLeader) {
            return member.name;
        }  
    }
    return "No team leader found.";
}   

const team = [
    { name: "Alice", isLeader: false },
    { name: "Bob", isLeader: true },
    { name: "Charlie", isLeader: false }
];
const leader = findTeamLeader(team);
console.log(`The team leader is: ${leader}`);


// ****************************** TASK 2 *******************************
// Find th Oldest: Write a program to find the oldest person from an array of people. The oldest peron is identified by having the highest age property.

function findOldestPerson(people) {
    let oldestPerson = null;
    for (let person of people) {
        if (!oldestPerson || person.age > oldestPerson.age) {
            oldestPerson = person;
        }
    }
    return oldestPerson ? oldestPerson.name : "No people found.";
}

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 40 },
    { name: "Charlie", age: 25 }
];
const oldest = findOldestPerson(people);
console.log(`The oldest person is: ${oldest}`);


// ****************************** TASK 3 *******************************
// Find the Most Expensive Item: Write a program to find most expensive item from an array of products. The most expensive item is identified by having the highest price property.

function findMostExpensiveItem(products) {  
    let mostExpensiveItem = null;
    for (let product of products) {
        if (!mostExpensiveItem || product.price > mostExpensiveItem.price) {
            mostExpensiveItem = product;
        }
    }           
    return mostExpensiveItem ? mostExpensiveItem.name : "No products found.";
}   
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 800 },     
    { name: "Tablet", price: 600 }
];
const mostExpensive = findMostExpensiveItem(products);
console.log(`The most expensive item is: ${mostExpensive}`);