//                     Logic and Summation Questions

// *************************** TASK 1 *****************************
// Total savings: write a program to calculate the total savings if you save a fixed amount every day for N days. Assume you save a certain amount each day and calculate the total savins over N days.

function calculateTotalSavings(dailySavings, days) {
    let totalSavings = 0;  
    for (let i = 1; i <= days; i++) {
        totalSavings += dailySavings;
    }
    return totalSavings;
}

const dailySavings = 10; 
const days = 30;    
const totalSavings = calculateTotalSavings(dailySavings, days);
console.log(`Total savings after ${days} days: $${totalSavings}`);




// *************************** TASK 2 *****************************
// Weekly Sales: Write a program to calculate the total sales amount for a week. Sum the sales from each day to get the total weekly sales.

function calculateWeeklySales(dailySales) {
    let totalSales = 0; 
    for (let sales of dailySales) {
        totalSales += sales;
    }
    return totalSales;
}

const dailySales = [100, 150, 200, 250, 300, 350, 400];
const weeklySales = calculateWeeklySales(dailySales);
console.log(`Total weekly sales: $${weeklySales}`);