const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const button4 = document.querySelector("#button-4");
const button5 = document.querySelector("#button-5");

const answer1 = document.querySelector("#answer-1");
const answer2 = document.querySelector("#answer-2");
const answer3 = document.querySelector("#answer-3");
const answer4 = document.querySelector("#answer-4");
const answer5 = document.querySelector("#answer-5");

const question1 = document.querySelector("#question-1");
const question2 = document.querySelector("#question-2");
const question3 = document.querySelector("#question-3");
const question4 = document.querySelector("#question-4");
const question5 = document.querySelector("#question-5");

// if user toggle from button

button1.addEventListener("click", function () {
  if (button1.className.includes("close")) {
    button1.classList.toggle("toggle-button-open");
    answer1.classList.toggle("show-answer");
    question1.classList.toggle("question-weight-bold");
  } else {
    button1.classList.toggle("toggle-button-close");
  }
});
button2.addEventListener("click", function () {
  if (button2.className.includes("close")) {
    button2.classList.toggle("toggle-button-open");
    answer2.classList.toggle("show-answer");
    question2.classList.toggle("question-weight-bold");
  } else {
    button2.classList.toggle("toggle-button-close");
  }
});
button3.addEventListener("click", function () {
  if (button3.className.includes("close")) {
    button3.classList.toggle("toggle-button-open");
    answer3.classList.toggle("show-answer");
    question3.classList.toggle("question-weight-bold");
  } else {
    button3.classList.toggle("toggle-button-close");
  }
});
button4.addEventListener("click", function () {
  if (button4.className.includes("close")) {
    button4.classList.toggle("toggle-button-open");
    answer4.classList.toggle("show-answer");
    question4.classList.toggle("question-weight-bold");
  } else {
    button4.classList.toggle("toggle-button-close");
  }
});
button5.addEventListener("click", function () {
  if (button5.className.includes("close")) {
    button5.classList.toggle("toggle-button-open");
    answer5.classList.toggle("show-answer");
    question5.classList.toggle("question-weight-bold");
  } else {
    button5.classList.toggle("toggle-button-close");
  }
});

// if user toggle from question

question1.addEventListener("click", function () {
  if (button1.className.includes("close")) {
    button1.classList.toggle("toggle-button-open");
    answer1.classList.toggle("show-answer");
    question1.classList.toggle("question-weight-bold");
  } else {
    button1.classList.toggle("toggle-button-close");
    answer1.classList.toggle("show-answer");
    question1.classList.toggle("question-weight-bold");
  }
});

question2.addEventListener("click", function () {
  if (button2.className.includes("close")) {
    button2.classList.toggle("toggle-button-open");
    answer2.classList.toggle("show-answer");
    question2.classList.toggle("question-weight-bold");
  } else {
    button2.classList.toggle("toggle-button-close");
    answer2.classList.toggle("show-answer");
    question2.classList.toggle("question-weight-bold");
  }
});

question3.addEventListener("click", function () {
  if (button3.className.includes("close")) {
    button3.classList.toggle("toggle-button-open");
    answer3.classList.toggle("show-answer");
    question3.classList.toggle("question-weight-bold");
  } else {
    button3.classList.toggle("toggle-button-close");
    answer3.classList.toggle("show-answer");
    question3.classList.toggle("question-weight-bold");
  }
});

question4.addEventListener("click", function () {
  if (button4.className.includes("close")) {
    button4.classList.toggle("toggle-button-open");
    answer4.classList.toggle("show-answer");
    question4.classList.toggle("question-weight-bold");
  } else {
    button4.classList.toggle("toggle-button-close");
    answer4.classList.toggle("show-answer");
    question4.classList.toggle("question-weight-bold");
  }
});

question5.addEventListener("click", function () {
  if (button5.className.includes("close")) {
    button5.classList.toggle("toggle-button-open");
    answer5.classList.toggle("show-answer");
    question5.classList.toggle("question-weight-bold");
  } else {
    button5.classList.toggle("toggle-button-close");
    answer5.classList.toggle("show-answer");
    question5.classList.toggle("question-weight-bold");
  }
});

/* 
Refactoring code in process

const buttons = document.querySelectorAll("button");

function handleBuyButtonClick(event) {
  if (event.target.className.includes("close")) {
    event.target.classList.toggle("toggle-button-open");
  } else {
    event.target.classList.toggle("toggle-button-close");
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", handleBuyButtonClick);
});

*/
