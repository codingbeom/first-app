import React from "react";
import styled from "styled-components";
import { quiz } from "contents";

const ResultTitle = styled.h1`
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
`;

const Score = styled.p`
  font-size: 192px;
  margin: 40px;
  text-align: center;
  color: ${(props) => props.theme.primaryColor100};
`;

const ResultSection = ({ score }) => (
  <>
    <ResultTitle>당신의 점수는?</ResultTitle>
    <Score>
      {score}/{quiz.length}
    </Score>
  </>
);
export default ResultSection;
