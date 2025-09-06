/**************
  Let's play a Game:   This is an advanced problem!

Using a for loop, and the two already declared variables points and pointsReset, create a game.

Rules of this Game:
The game will consist of 100 turns.
On an even turn (if the number of turns is even), 5 points are added to your score.
On an odd turn (if the number of turns is odd), you gain 3 points instead.
If ever your score is equal to 125, your points total will reset back down to 25 points. This will only be allowed to happen once (use the variable pointsReset to keep track of this).
The game will run as long as both of the following two conditions are true:
        1. The game has made it through 100 turns or less
        2. You reach 290 points or more, whichever comes first.
 *****/

var points = 0;
var pointsReset = false;

for (var turn = 1; turn <= 100 && points < 290; turn++) {
    
    // odd or even turn
    if (turn % 2 === 0) {
        points += 5;  // even turn
    } else {
        points += 3;  // odd turn
    }

    // check reset condition (only once!)
    if (points === 125 && pointsReset === false) {
        points = 25;
        pointsReset = true;
    }

    console.log("Turn: " + turn + " | Points: " + points);
}

console.log("Game over! Final score: " + points);