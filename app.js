"use strict";

const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

question.addEventListener("click", function () {
  answer.classList.add("hide");
});
