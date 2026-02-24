//                              How Much Discount 

// ****************************** TASK 1 *******************************
// Loyalty Reward: Write a program to check if a user qualifies for a loyalty reward based on their membership status and total purchases over the year.
// Members who have spent over $500 in a year receive a loyalty reward.

function checkLoyaltyReward(membershipStatus, totalPurchases) {
    if (membershipStatus === true && totalPurchases > 500) {
        return "Congratulations! You qualify for a loyalty reward.";
    } else {
        return "Sorry, you do not qualify for a loyalty reward.";
    }
}

const isMember = true
const Purchases = 600
const Result = checkLoyaltyReward(isMember, Purchases);
console.log(Result);




// ****************************** TASK 2 *******************************
// Free Shipping: Write a program to determine if a user is eligible for free shiipping based on their membership staus and purchase amount. Free shipping is available for members who spend over $75.

function checkFreeShipping(membershipStatus, purchaseAmount) {
    if (membershipStatus === true && purchaseAmount > 75) {
        return "Congratulations! You are eligible for free shipping.";
    } else {
        return "Sorry, you are not eligible for free shipping.";
    }
}       

const Member = true
const purchaseAmount = 100
const result = checkFreeShipping(Member, purchaseAmount);
console.log(result);


// ****************************** TASK 3 *******************************
// Bonus Points: Write a program to determine if a user earns bonus points based on their membership status and purchase amount.
// Members earn bonus points if they spend over $100, while non-members earn bonus points if they spend over $200.

function checkBonusPoints(membershipStatus, purchaseAmount) {
    if (membershipStatus === true && purchaseAmount > 100) {
        return "Congratulations! You earn bonus points.";
    } else if (membershipStatus === false && purchaseAmount > 200) {
        return "Congratulations! You earn bonus points.";
    } else {
        return "Sorry, you do not earn bonus points.";
    }       
}

const is_Member = false
const purchase_Amount= 250
const bonusResult = checkBonusPoints(is_Member, purchase_Amount);
console.log(bonusResult);