import React, { useState } from "react";
import "./App.css";

const quiz = [
  {
    id: 1,
    question: "일론 머스크의 우주 탐사 기업 이름은?",
    answers: [
      { text: "Space X", corret: true },
      { text: "Tesla", corret: false },
      { text: "Boring Company", corret: false },
      { text: "SolaCity", corret: false },
    ],
  },
  {
    id: 2,
    question: "일론 머스크의 고향은 어디일까요?",
    answers: [
      { text: "미국 캘리포니아", corret: false },
      { text: "남아프리카 공화국 프리토리아", corret: true },
      { text: "캐나다 벤쿠버", corret: false },
      { text: "호주 시드니", corret: false },
    ],
  },
  {
    id: 3,
    question: "일론 머스크가 창업한 페이팔 전신 기업의 이름은?",
    answers: [
      { text: "Zip2 Corporation", corret: false },
      { text: "Alpha Exploration", corret: false },
      { text: "X.com", corret: true },
      { text: "Everything Co.", corret: false },
    ],
  },
];

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
    <div className="container">
      {showPage ? (
        <div className="app">
          <h1 className="result-header">퀴즈가 종료되었습니다.</h1>
          <p className="result-score">{showScore} 점</p>
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
              <button
                onClick={() => quizClick(answers.corret)}
                value={answers.text}
              >
                {answers.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
