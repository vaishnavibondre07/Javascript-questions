//                    Find Largest and Samllest Number in an Array

// *************************** TASK 1 *****************************
// Daily Temparature: Write a program to find the highest and lowest temprature recorded in a week.

function findTemperatureExtremes(temperatures) {
    if (temperatures.length === 0) {
        console.log("No temperatures recorded.");
        return;
    }
    let highest = temperatures[0];
    let lowest = temperatures[0];   
    for (let temp of temperatures) {
        if (temp > highest) {
            highest = temp;
        }   
        if (temp < lowest) {
            lowest = temp;
        }
    }
    console.log(`Highest temperature recorded: ${highest}`);
    console.log(`Lowest temperature recorded: ${lowest}`);
}
const weeklyTemperatures = [30, 32, 28, 31, 29, 33, 27];
findTemperatureExtremes(weeklyTemperatures);



// ************************** TASK 2 *****************************
// Monthly Rainfall: Write a program to find the maximum and minimum rainfall recorded in a month.

function findRainfallExtremes(rainfall) {
    if (rainfall.length === 0) {
        console.log("No rainfall data available.");
        return;
    }   
    let maxRainfall = rainfall[0];
    let minRainfall = rainfall[0];
    for (let rain of rainfall) {
        if (rain > maxRainfall) {
            maxRainfall = rain;
        }
        if (rain < minRainfall) {
            minRainfall = rain;
        }
    }
    console.log(`Maximum rainfall recorded: ${maxRainfall} mm`);
    console.log(`Minimum rainfall recorded: ${minRainfall} mm`);
}

const monthlyRainfall = [50, 60, 45, 70, 55, 65, 40];
findRainfallExtremes(monthlyRainfall);





// *************************** TASK 3 *****************************
// Student Scores: Write a program to find the highest and lowest scores in a class of students.

function findScoreExtremes(scores) {
    if (scores.length === 0) {
        console.log("No scores available.");
        return;
    }
    let highestScore = scores[0];
    let lowestScore = scores[0];
    for (let score of scores) {
        if (score > highestScore) {
            highestScore = score;
        }
        if (score < lowestScore) {
            lowestScore = score;
        }
    }
    console.log(`Highest score in the class: ${highestScore}`);
    console.log(`Lowest score in the class: ${lowestScore}`);
}

const studentScores = [85, 92, 78, 90, 88, 95, 80];
findScoreExtremes(studentScores);