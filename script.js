var name = prompt ("Hello Player, Please input Your Name to Enter enter the first of this number guessing game");
var n = Math.random();
n = n * 2;
n = Math.floor(n) + 1;
console.log(n);
var guess = prompt (  name +" Welcome"+" to stage one. Guess a number between 1 and 2")

if (guess == n){
    alert("correct. you have earned 10 points");
    var p = Math.random();
     p = p * 3;
p = Math.floor(p) + 1;
console.log(p);
var guess2 = prompt (  name +" Welcome"+" to the second stage, Guess the Number generated to finish game. hint: The number is ranging from 1 to 3");
 if (guess2 == p){
    alert("Congratulations!!! " + name + " You finished the game, and received 40 points!!")
 } else {alert("That's not it, Try again")} 

} else {alert("buzz!!! that was wrong, try again")}
