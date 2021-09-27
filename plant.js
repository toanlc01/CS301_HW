 // List of all available button IDs.
 var buttonList = ["answer1", "answer2", "answer3", "answer4"];

 // List of questions

 // For desert
 var desertEasyRootQuestion = { question: "desertEasyRootQuestion", transition: [] };
 var desertEasyStemQuestion = { question: "desertEasyStemQuestion", transition: [] };
 var desertEasyLeavesQuestion = { question: "desertEasyLeavesQuestion", transition: [] };
 var desertMediumRootQuestion = { question: "desertMediumRootQuestion", transition: [] };
 var desertMediumStemQuestion = { question: "desertMediumStemQuestion", transition: [] };
 var desertMediumLeavesQuestion = { question: "desertMediumLeavesQuestion", transition: [] };
 
 // Append outgoing transition question to each question

 // transition for easy root question
 desertEasyRootQuestion.transition.push( { answer: "correct", feedback: "easy root feedback for correct choice", nextQuestion: desertMediumRootQuestion } );
 desertEasyRootQuestion.transition.push( { answer: "incorrect", feedback: "easy root feedback for incorrect choice", nextQuestion: desertEasyStemQuestion} );

 // transition for easy stem question
 desertEasyStemQuestion.transition.push( { answer: "correct", feedback: "easy stem feedback for correct choice", nextQuestion: desertMediumLeavesQuestion} );
 desertEasyStemQuestion.transition.push( { answer: "incorrect", feedback: "easy stem feedback for incorrect choice", nextQuestion: desertEasyLeavesQuestion} );

 // transition for easy leaves question
 desertEasyLeavesQuestion.transition.push( { answer: "incorrect", feedback: "easy leaves feedback for incorrect choice", nextQuestion: desertEasyRootQuestion} );
 desertEasyLeavesQuestion.transition.push( { answer: "correct", feedback: "easy leaves feedback for correct choice", nextQuestion: desertMediumLeavesQuestion} );

 // transition for medium root question
 desertMediumRootQuestion.transition.push( { answer: "incorrect", feedback: "medium root feedback for incorrect choice", nextQuestion: desertEasyStemQuestion} );
 desertMediumRootQuestion.transition.push( { answer: "incorrect", feedback: "medium root feedback for incorrect choice", nextQuestion: desertEasyStemQuestion} );
 desertMediumRootQuestion.transition.push( { answer: "correct", feedback: "medium root feedback for correct choice", nextQuestion: desertMediumStemQuestion} );

 // transition for medium stem question
 desertMediumStemQuestion.transition.push( { answer: "incorrect", feedback: "medium stem feedback for incorrect choice", nextQuestion: desertEasyStemQuestion} );
 desertMediumStemQuestion.transition.push( { answer: "correct", feedback: "medium stem feedback for correct choice", nextQuestion: desertMediumLeavesQuestion} );
 desertMediumStemQuestion.transition.push( { answer: "incorrect", feedback: "medium stem feedback for incorrect choice", nextQuestion: desertEasyStemQuestion} );

 // transition for medium leaves question
 desertMediumLeavesQuestion.transition.push( { answer: "incorrect", feedback: "medium leaves feedback for incorrect choice", nextQuestion: desertEasyStemQuestion } );
 

 // Get access to button element by its unique ID string.
 document.getElementById("answer1").addEventListener("click", onClick1);
 document.getElementById("answer2").addEventListener("click", onClick2);
 document.getElementById("answer3").addEventListener("click", onClick3);


 var currentQuestion = desertEasyRootQuestion;
 changeQuestion(currentQuestion);

 function changeQuestion(current) {
     // Update text display of current question
     document.getElementById("question").innerHTML = current.question;

     // Hide all action buttons
     hideButtons();

     for (let i = 0; i < current.transition.length; i ++) {
         let button = document.getElementById(buttonList[i]);
         button.style.visibility = "visible";
         button.innerHTML = current.transition[i].answer;
     }

 }

 function hideButtons() {
     for (let i = 0; i < buttonList.length; i ++) {
         document.getElementById(buttonList[i]).style.visibility = "hidden";
     }
 }

async function onClick1() {
    // Feedback appears for 3 seconds before disappearing and change to another question
    document.getElementById("feedback").innerHTML = currentQuestion.transition[0].feedback;
    await delay(3000);
     document.getElementById("feedback").innerHTML = "";

     // Change to next question
     currentQuestion = currentQuestion.transition[0].nextQuestion;
     changeQuestion(currentQuestion);
 }

 async function onClick2() {
    // Feedback appears for 3 seconds before disappearing and change to another question
    document.getElementById("feedback").innerHTML = currentQuestion.transition[1].feedback;
    await delay(3000);
    document.getElementById("feedback").innerHTML = "";

    // Change to next question
     currentQuestion = currentQuestion.transition[1].nextQuestion;
     changeQuestion(currentQuestion);
 }

async function onClick3() {
    // Feedback appears for 3 seconds before disappearing and change to another question
    document.getElementById("feedback").innerHTML = currentQuestion.transition[2].feedback;
    await delay(3000);
     document.getElementById("feedback").innerHTML = "";

    // Change to next question
     currentQuestion = currentQuestion.transition[2].nextQuestion;
     changeQuestion(currentQuestion);
 }

 // Delay function
 const delay = ms => new Promise(res => setTimeout(res, ms));





















