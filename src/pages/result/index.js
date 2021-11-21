import React from "react";
import { Button, ResultSection, Container } from "components";

const Result = ({ conScore, setScore }) => {
  return (
    <Container>
      <ResultSection conScore={conScore}></ResultSection>
      <Button onClick={() => setScore(0)} to="/">
        테스트 다시하기
      </Button>
    </Container>
  );
};

export default Result;
