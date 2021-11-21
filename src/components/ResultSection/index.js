import React from "react";
import styled from "styled-components";
import { SocialButtonGroup } from "components";

const ResultTitle = styled.h1`
  font-size: 54px;
  font-weight: bold;
  margin: 8px 0px;
  text-align: center;
`;

const Score = styled.p`
  font-size: 120px;
  margin: 40px;
  text-align: center;
  color: ${(props) => props.theme.primaryColor100};
`;

const ResultSection = ({ conScore }) => (
  <>
    <ResultTitle>당신의 점수는?</ResultTitle>
    <Score>{conScore} 점</Score>
    <SocialButtonGroup></SocialButtonGroup>
  </>
);
export default ResultSection;
