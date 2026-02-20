//                                        Are You Eligible to Vote?

// ****************************** TASK 1 *******************************
// Driving Eligibility: Write a program to check if a person can apply for a driving license based on age 

function checkDrivingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to apply for a driving license.";
    } else {
        return "You are not eligible to apply for a driving license.";
    }
}

const personAge = 20
const eligibilityResult = checkDrivingEligibility(personAge);
console.log(`At the age of ${personAge}, ${eligibilityResult}`);


// ****************************** TASK 2 *******************************
// Senior Citizen Discount : Write a program to check if a person is eligible for a senior citizen discount based on age.

function checkSeniorCitizenDiscount(age) {  
    if (age >= 60) {
        return "You are eligible for a senior citizen discount.";
    } else {
        return "You are not eligible for a senior citizen discount.";
    }   
}

const personAge2 = 65
const discountResult = checkSeniorCitizenDiscount(personAge2);
console.log(`At the age of ${personAge2}, ${discountResult}`);


