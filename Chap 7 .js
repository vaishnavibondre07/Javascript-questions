// *************************** TASK 1 *****************************
// Find Political Mentions : Write a program to count how many times the word "politics" appears in an array of debate topics.


function countPoliticalMentions(debateTopics) {
    let count = 0;
    for (let topic of debateTopics) {
        if (topic.toLowerCase().includes("politics")) {
            count++;
        }   
    }
    return count;
}
const debateTopics = [
    "The impact of politics on society",
    "Climate change and politics",
    "The role of politics in education",        
    "Sports and politics",
    "The influence of politics on the economy",
    "The relationship between politics and technology",
    "The future of politics in the digital age",
    "The intersection of politics and culture",
    "The role of politics in healthcare",   
    "The impact of politics on international relations"
];
const politicalMentionsCount = countPoliticalMentions(debateTopics);
console.log(`The word "politics" appears ${politicalMentionsCount} times in the debate topics.`);




// *************************** TASK 2 *****************************
// Most Talked - Anout Sport: Write a program to count how many times the word "Cricket" appears in an array of debate topics.

function countCricketMentions(debateTopics) {
    let count = 0;
    for (let topic of debateTopics) {
        if (topic.toLowerCase().includes("cricket")) {
            count++;
        }   
    }
    return count;
}
const sportsDebateTopics = [
    "The impact of cricket on society",
    "Cricket and politics",     
    "The role of cricket in education",
    "Sports and cricket",
    "The influence of cricket on the economy",
    "The relationship between cricket and technology",
    "The future of cricket in the digital age",
    "The intersection of cricket and culture",
    "The role of cricket in healthcare",
    "The impact of cricket on international relations"
];
const cricketMentionsCount = countCricketMentions(sportsDebateTopics);
console.log(`The word "Cricket" appears ${cricketMentionsCount} times in the sports debate topics.`);   

