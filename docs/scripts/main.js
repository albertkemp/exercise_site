var exerciselevels = []; // Global variable to store exercise levels
var goal; // Global variable to store the goal

function putinmygoal() {
    // Human types goal into input box
    goal = parseInt(document.getElementById("goal").value);
    console.log(goal);
}

function showmyscore() {
    var numberofexercises = parseInt(document.getElementById("numberofexercises").value);
    console.log(numberofexercises);

    var time = parseInt(document.getElementById("timetaken").value);
    console.log(time);

    var newscore = time / numberofexercises;
    exerciselevels.push(newscore);
    console.log(newscore);

    var message1 = document.getElementById("message1");
    message1.innerHTML = "Your score is: " + newscore;

    checkhighscoreifgoal();
}

function checkhighscoreifgoal() {
    var message = document.getElementById("message");

    var highscore = Math.max(...exerciselevels);
    console.log(highscore);

    if (highscore >= goal) {
        message.innerHTML = "Congratulations! Your high score is: " + highscore + "! You have reached your goal!";
    } else {
        message.innerHTML = "You have not yet reached your ultimate goal. Keep trying hard!";
    }
}
