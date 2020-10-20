import { quizQuestion } from "./quizQuestion";
import { DOMSelectors } from "./Dom";
console.log("connected");

const init = function () {
  quizQuestion.forEach((item) =>
    DOMSelectors.quizContainer.insertAdjacentHTML(
      "beforeend",
      `
        <h4 class="item-image">
        <img
            class="item-image"
            src="${item.img}"
            alt=""
        />
        <h2 class= "qan">${item.number}. ${item.question}</h2>
       
        <h3 class= "answer">
          <input type="radio" id="${item.a}"name="${item.number}" value="${item.a}">
          ${item.a} 
        </h3>
        <h3 class= "answer"> 
        <input type="radio" id="${item.b}"name="${item.number}" value="${item.b}">
        ${item.b} 
        </h3>
        <h3 class= "answer">
        <input type="radio" id="${item.c}"name="${item.number}" value="${item.c}">
        ${item.c} 
        </h3>
        `
    )
  );

  const quizResults = function () {
    var score = 0;

    quizQuestion.forEach((question) => {
      if(document.querySelector('input[name ="${question.number}"]: checked')){
       var answerSelected = document.querySelector(
        `input[name="${question.number}"]:checked`
      ).value;
      if (answerSelected === `${question.correctAnswer}`) {
        score++;
        document.getElementById(`${question.number}`).style.backgroundColor =
          "rgb(165,252,197)";
      } else {
        document.getElementById(`${question.number}`).style.backgroundColor =
          "rgb(255,134,134)";
      }
      DOMSelectors.resultContainer.innerHTML = `<h1>Your Score is ${score}/${quizQuestion.length}</h1>`;
     }
    });
  };
  DOMSelectors.submitButton.addEventListener("click", quizResults);
};


init();
