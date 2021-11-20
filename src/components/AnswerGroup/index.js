import React from "react";
import styled from "styled-components";
import { quiz } from "contents";
import { Button } from "components";

const AnswerGroupW = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const AnswerGroup = ({ currenNo, quizClick }) => (
  <AnswerGroupW>
    {quiz[currenNo].answers.map((tomato) => (
      <Button key={tomato.text} onClick={() => quizClick(tomato.corret)}>
        {tomato.text}
      </Button>
    ))}
  </AnswerGroupW>
);
export default AnswerGroup;
