var timeEl = document.querySelector(".time");
var startButton = document.getElementById("startBtn")
var secondsLeft = 10;
//QuizQuestioList an array of objects 
// var array=[
//     {
//         question:  "Question1", 
//         choice:,
//         coreectanswer: ""
//     }
// ]


function myFunction() {
    var x = document.getElementById("startScreen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  //
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      //sets the value for the element on the HTML page 
      timeEl.textContent = secondsLeft + " seconds left.";
         
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }
startButton.addEventListener("click", function() {
    //start the clock 
   setTime();
    //show the question 
    myFunction(); 
  });

  

  //1. make a new display funvtion to display QAgrab the elemnts by id 
  // then set the textContent for them 
  //on every answer button add event listiner that validates the answer 

  //2. new function validateANswer 
    //2.1 if else to check the correct answer 
        //2.1.1 correct answr - increse score and move to next question 
        //2.1.2 inccorect - time penalty and move to next question 

  //3. function saveScore to localSTorage 
