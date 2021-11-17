import React, { useState } from "react";
import "../App.css";
import { quiz } from "../contents";
import Button from "./Button";
import theme from "../theme/theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [score, setScore] = useState(0);
  const [showPage, setPage] = useState(false);
  const [currenNo, setCurrenNo] = useState(0);
  const quizClick = (corret) => {
    if (corret) {
      alert("정답입니다.");
      setScore((score) => score + 1);
    } else {
      alert("틀렸습니다.");
    }
    if (currenNo === quiz.length - 1) {
      setPage(true);
    } else {
      setCurrenNo((currenNo) => currenNo + 1);
    }
  };
  const showScore = Math.floor((score / quiz.length) * 100);
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        {showPage ? (
          <div className="app">
            <h1 className="result-header">퀴즈가 종료되었습니다.</h1>
            <p className="result-score">{showScore}점</p>
          </div>
        ) : (
          <div className="app">
            <div className="question-section">
              <h1 className="question-header">
                <div>
                  <span>
                    {quiz[currenNo].id}/{quiz.length}
                  </span>
                </div>
                {quiz[currenNo].question}
              </h1>
              <div className="question-header__text"></div>
            </div>
            <div className="quiz-section">
              {quiz[currenNo].answers.map((answers) => (
                <Button
                  onClick={() => quizClick(answers.corret)}
                  text={answers.text}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
