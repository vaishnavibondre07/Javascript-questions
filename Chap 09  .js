// *********************** TASK 1 *****************************
// Analyze Daily Stock Prices: Write a program to check if the stock price is going up based on a given threshold. If the stock price is above the threshold, print "Stock price is going up!", otherwise print "Stock price is not going up."  Prices stores array of prices and threshold is a number.

function checkStockPrice(prices, threshold) {
    if (prices.length === 0) {
        console.log("No stock prices available.");
        return;
    }   
    const latestPrice = prices[prices.length - 1];
    if (latestPrice > threshold) {
        console.log("Stock price is going up!");
    } else {
        console.log("Stock price is not going up.");
    }

}

const stockPrices = [150, 155, 160, 165, 160];
const priceThreshold = 160;
checkStockPrice(stockPrices, priceThreshold);   





// *************************** TASK 2 *****************************
// Weekly Stock Analysis: Write a program to determine if the stock price increased significantly in any week based  on the threshold.

function analyzeWeeklyStock(prices, threshold) {
    if (prices.length < 7) {
        console.log("Not enough stock prices for a week.");
        return;
    }
    for (let i = 0; i <= prices.length - 7; i++) {
        const weeklyPrices = prices.slice(i, i + 7);
        const priceChange = weeklyPrices[weeklyPrices.length - 1] - weeklyPrices[0];
        if (priceChange > threshold) {
            console.log(`Significant increase detected in week starting at index ${i}`);
        }
    }
}
const weeklyStockPrices = [150, 155, 160, 165, 160, 170, 175, 180];
const weeklyThreshold = 20;
analyzeWeeklyStock(weeklyStockPrices, weeklyThreshold);