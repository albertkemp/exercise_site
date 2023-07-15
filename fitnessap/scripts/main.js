//Copyright (C) Albert Kemp 2023
// This code is a private exercise app code and is liable to copyright.
function putinmygoal() {
    //Human types goal into input box 
var goal = parseInt(document.getElementById("goal").value);
console.log(goal);
}
function showmyscore() {
    //The array containing all the scores of the human
var exerciselevels = [];

    //The user types in the HTML input box how many exercises they have done.
    var numberofexercises = parseInt(document.getElementById("numberofexercises").value);
    
    //The time it took for the person to do the exercises
    var time = parseInt(document.getElementById("timetaken").value);

    //Adding up the average of the time and number of exercises for the new score
    var newscore = (numberofexercises + time) / 2;
    var message1 = document.getElementById("message1");
    message1.innerHTML = "Your score is: " + newscore;
}

function checkhighscoreifgoal() {
//The array containing all the scores of the human
var exerciselevels = [];

    //The user types in the HTML input box how many exercises they have done.
    var numberofexercises = parseInt(document.getElementById("numberofexercises").value);
    
    //The time it took for the person to do the exercises
    var time = parseInt(document.getElementById("timetaken").value);

    //Adding up the average of the time and number of exercises for the new score
    var newscore = (numberofexercises + time) / 2;

//logging the array to the console.
console.log(exerciselevels);

//The HTML variable where the message will be displayed
var message = document.getElementById("message");

//Human types goal into input box 
var goal = parseInt(document.getElementById("goal").value);
console.log(goal);

//pushing the new score into the array
exerciselevels.push(newscore);

//for loop finding the highest score in the array
var highscore = exerciselevels[0];
for (var i = 1; i < exerciselevels.length; i++) {
  if (exerciselevels[i] > highscore) {
    highscore = exerciselevels[i];
  }
}
console.log(highscore);

//If the high score is the same or over their goal they get a congratulation message
if (highscore >= goal) {
    message.innerHTML = "Congratulations! Your high score is: " + highscore + "! You have reached your goal!";
} else {
    message.innerHTML = "You have not yet reached your ultimate goal. Keep trying hard!";
}
}