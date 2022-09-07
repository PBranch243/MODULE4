var arr = ['10', '9','8','7','6','5','4','3','2','1'];

function runTimer(){
    
    let sec = arr.length;
    arr.slice();
    document.querySelector("#timer").innerHTML = sec + " seconds left";

};
// GIVEN I am taking a code quiz
// WHEN I click the start button
// EventListener,
//click even t function call
function startQuiz() {
    //start timer
    setInterval(runTimer(), 1000);
    //display question
};

var el = window.document.querySelector("#start-quiz");

el.addEventListener("click", startQuiz());

// THEN a timer starts and I am presented with a question
    // function
        //timer function and innerhtml/append
// WHEN I answer a question
    //click event

// THEN I am presented with another question
    //function
        //append
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
    //function if/else
        //innerhtml compared to correct answer
// WHEN all questions are answered or the timer reaches 0
    //if/else
        //one in our timer, check against 0
        // is my question array empty?
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
    //text entry
    //localstorage


