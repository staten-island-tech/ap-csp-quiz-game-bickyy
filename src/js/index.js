import { quizQuestion } from "./quizQuestion";
import { DOMSelectors } from "./Dom";

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

};


init();
