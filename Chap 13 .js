//         MERGE TWO OBJECTS 

// *************************** TASK 1 ******************************
// Combine User Details: Write a program to combine two user details objects. The second object may override properties of the first object.

function mergeUserDetails(user1, user2) {
    return { ...user1, ...user2 };
}

const userDetails1 = { name: "Alice", age: 30, city: "New York" };
const userDetails2 = { age: 35, city: "Los Angeles", profession: "Engineer" };
const mergedUserDetails = mergeUserDetails(userDetails1, userDetails2);
console.log("Merged User Details:", mergedUserDetails);


// *************************** TASK 2 ******************************
// Merge Product Information: Write a program to merge two product information objects, where the second object may contain additional properties.

function mergeProductInfo(product1, product2) {
    return { ...product1, ...product2 };
}

const productInfo1 = { name: "Laptop", price: 999, brand: "TechBrand" };
const productInfo2 = { price: 899, warranty: "2 years", color: "Silver" };
const mergedProductInfo = mergeProductInfo(productInfo1, productInfo2);
console.log("Merged Product Information:", mergedProductInfo);
