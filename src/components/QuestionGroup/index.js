import React from "react";
import styled from "styled-components";
import { quiz } from "../../contents";

const QuestionW = styled.div`
  margin-bottom: 16px;
`;

const PageLabel = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const QuestionTitle = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;

const QuestionGroup = ({ currenNo }) => (
  <QuestionW>
    <PageLabel>
      <span>{quiz[currenNo].id}</span>/{quiz.length}
    </PageLabel>
    <QuestionTitle>{quiz[currenNo].question}</QuestionTitle>
  </QuestionW>
);
export default QuestionGroup;
