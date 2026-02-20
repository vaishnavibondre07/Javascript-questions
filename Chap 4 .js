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