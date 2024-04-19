// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.


// i wrote out my code to be each line exactly is wha my thought process is
function score( dice ) {
    dice = dice.reduce((obj,key) => {
      obj[key] = ++obj[key] || 1
      return obj
    }, {})
    let total = 0
    for (let [key, value] of Object.entries(dice)) {
      if (key == 1) {
        total+=(1000 * Math.floor(value/3))+(100 * (value%3))
      } else if (key == 2) {
        total += (200 * Math.floor(value/3))
      } else if (key == 3) {
        total += (300 * Math.floor(value/3))
      } else if (key == 4) {
        total += (400 * Math.floor(value/3))
      } else if ( key == 5) {
        total += (500 * Math.floor(value/3)) + (50 * (value%3))
      } else {
        total += (600 * Math.floor(value/3))
      }
    }
    return total
  }


// not my solution but i've editted it so i can understand. the original was really hard to read but it was clever
function score( dice ) {
    let numCount = [0,0,0,0,0,0];
    let singleScore = [1000,200,300,400,500,600];
    let tripleScore = [100,0,0,0,50,0];
    // the forEach function will loop thru the dice array and count how many times a number is rolled. the 0 index would mean how many times 1 was rolled, the last index is how many times 6 was rolled
    dice.forEach(function(x){ numCount[x-1]++; });
    // we'll use a reduce method to use the accumulator as the total score. it would be the total PLUS the single score or triple score, depending on if x (the count or number of times a number was rolled) is >= 3 or not
    return numCount.reduce(function(total,x,ind){ 
      return total + (x >= 3? singleScore[ind] : 0) + tripleScore[ind]*(x % 3);
    },0);
  }


// ive also seen solutions use regex and sort to find triple numbers and objects that use regex as the key and score as value pair