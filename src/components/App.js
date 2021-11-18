import React, { useState } from "react";
import "../App.css";
import { quiz } from "../contents";
import theme from "../theme/theme";
import { ThemeProvider } from "styled-components";
import Container from "./container";
import AnswerGroup from "./AnswerGroup";
import QuestionGroup from "./QuestionGroup";

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

  return (
    <ThemeProvider theme={theme}>
      {showPage ? (
        <Container>
          <h1 className="result-header">퀴즈가 종료되었습니다.</h1>
          <p className="result-score">
            {score}/{quiz.length}
          </p>
        </Container>
      ) : (
        <Container>
          <QuestionGroup currentNo={currenNo}></QuestionGroup>
          <AnswerGroup currenNo={currenNo} quizClick={quizClick} />
        </Container>
      )}
    </ThemeProvider>
  );
}

export default App;
