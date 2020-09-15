// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    
 *    counter1 is using a nested function to make a counter, whereas
 *    counter2 is not nested.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  
 *    counter1 is using the closure because it is referring to a variable within a outer function.
 *    
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 *    counter1 is prefferred if you would want to re-use the function, whereas counter2 would be best to
 *    utilize the counter once.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 
Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
    const newScore= Math.floor(Math.random()*3)
    return newScore;
}

console.log(inning());

/* Task 3: finalScore()
Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
For example, 
finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 

function finalScore(numberInnings){
  const teams = [];
  for(let q=0; q<2;q++){
    var scoreCount = 0;
    for (let i = 0; i <numberInnings; i++){
        scoreCount= scoreCount + inning();
    }
    teams[q]=scoreCount;
  }
  const finalSolution ={
    "Home": teams[0],
    "Away": teams[1]
  };
  console.log(finalSolution);
}

finalScore(9);


/* Task 4: 
Create a function called `scoreboard` that accepts the following parameters: 
(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings
and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(inningName, scoreOfInning, numOfInnings) {
  let score = {
    home: 0,
    away: 0
  }
  for (let i = 0; i < numOfInnings; i++) {
    let resultHome = inningName();
    let resultAway = inningName();
    score.home += resultHome;
    score.away += resultAway;
    scoreOfInning (i + 1, resultHome, resultAway)
  }
  return score
}
console.log(scoreboard(inning, getInningScore, 9))
function getInningScore(getInning, getTeam1, getTeam2){
  return console.log(`${getInning}th inning: ${getTeam2} - ${getTeam1}`)
}