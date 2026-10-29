document.addEventListener("DOMContentLoaded", function () {
  let quizData = {
    sections: [
      {
        sectionTitle: "General knowledge",
        questions: [
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
        ],
      },
      {
        sectionTitle: "Science",
        questions: [
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
        ],
      },
      {
        sectionTitle: "Mathematic",
        questions: [
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
        ],
      },
      {
        sectionTitle: "Indian history",
        questions: [
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
        ],
      },
    ],
  };

  initSection();

  function initSection() {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.addEventListener("click", () => {
        const currentSection = section.getAttribute("data-section");
        startQuiz(currentSection);
      });
    });
  }

  function startQuiz(index) {
    const currentQuestions = quizData.sections[index].questions;
    let currentQuestionIndex = 0;
    let score = 0;
    let answerSelected = false;

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";

    showQuestions();

    function showQuestions() {
      const question = currentQuestions[currentQuestionIndex];
      let questionElement = document.getElementById("question");
      let optionsElement = document.getElementById("options");

      questionElement.textContent = question.question;
      optionsElement.innerHTML = "";
      if (question.questionType == "mcq") {
        question.options.forEach((option, index) => {
          const optionElement = document.createElement("div");
          optionElement.textContent = option;
          optionElement.addEventListener("click", () => {
            if (!answerSelected) {
              answerSelected = true;
              optionElement.classList.add("selected");
              checkAnswer(option, question.answer);
            }
          });
          optionsElement.appendChild(optionElement);
        });
      } else {
        const inputElement = document.createElement("input");
        inputElement.type =
          question.questionType === "number" ? "number" : "text";
        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit Answer";
        submitButton.className = "submit-answer";

        submitButton.onclick = () => {
          if (!answerSelected) {
            answerSelected = true;
            checkAnswer(
              inputElement.value.toString(),
              question.answer.toString(),
            );
          }
        };

        optionsElement.appendChild(inputElement);
        optionsElement.appendChild(submitButton);
      }

      function checkAnswer(givenAnswer, correctAnswer) {
        const feedbackElement = document.createElement("div");
        feedbackElement.id = "feedback";
        if (
          givenAnswer === correctAnswer ||
          givenAnswer.toLowerCase() === correctAnswer.toLowerCase()
        ) {
          score++;
          feedbackElement.textContent = "Correct";
          feedbackElement.style.color = "green";
        } else {
          feedbackElement.textContent = `Wrong, Correct Answer:${correctAnswer}`;
          feedbackElement.style.color = "red";
        }
        const optionsElement = document.getElementById("options");
        optionsElement.appendChild(feedbackElement);
        updateScore();
      }

      function updateScore() {
        document.getElementById("score").textContent = "Score:" + score;
      }


    }
          document
            .getElementById("next-button")
            .addEventListener("click", () => {
              if (currentQuestionIndex == currentQuestions.length-1) {
                endQuiz();
                console.log("selec");
              } else {
                answerSelected = false;
                currentQuestionIndex++;
                showQuestions();
              }
            });

          function endQuiz() {
            const questionContainer =
              document.getElementById("question-container");
            const quizContainer = document.getElementById("quiz-container");
            questionContainer.innerHTML = `
                <h1>Quiz Completed!</h1>
                <p>Your final Score: ${score}/${currentQuestions.length}</p>
                <button id="home-button">Go to Home</button>
            `;
            document
              .getElementById("home-button")
              .addEventListener("click", () => {
                questionContainer.style.display = "flex";
                quizContainer.style.display = "block";
              });
          }
  }
});

// console.log(quizData.sections[0].questions[0].question)
