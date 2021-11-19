import { useState } from "react";
import Container from "../../components/container";
import AnswerGroup from "../../components/AnswerGroup";
import QuestionGroup from "../../components/QuestionGroup";
import ResultSection from "../../components/ResultSection";
import { quiz } from "../../contents";

const Quiz = () => {
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

  return showPage ? (
    <Container>
      <ResultSection showScore={score} reSum={quiz.length}></ResultSection>
    </Container>
  ) : (
    <Container>
      <QuestionGroup currenNo={currenNo} />
      <AnswerGroup currenNo={currenNo} handleClick={quizClick} />
    </Container>
  );
};

export default Quiz;
