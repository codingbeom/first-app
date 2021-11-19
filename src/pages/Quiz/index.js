import { useState } from "react";
import Container from "../../components/container";
import AnswerGroup from "../../components/AnswerGroup";
import QuestionGroup from "../../components/QuestionGroup";
import { quiz } from "../../contents";
import { useHistory } from "react-router";

const Quiz = ({ setScore }) => {
  const [currenNo, setCurrenNo] = useState(0);
  let history = useHistory();

  const quizClick = (corret) => {
    if (corret) {
      alert("정답입니다.");
      setScore((score) => score + 1);
    } else {
      alert("틀렸습니다.");
    }
    if (currenNo === quiz.length - 1) {
      history.push("/result");
      //페이지 이동
    } else {
      setCurrenNo((currenNo) => currenNo + 1);
    }
  };

  return (
    <Container>
      <QuestionGroup currenNo={currenNo} />
      <AnswerGroup currenNo={currenNo} quizClick={quizClick} />
    </Container>
  );
};

export default Quiz;
