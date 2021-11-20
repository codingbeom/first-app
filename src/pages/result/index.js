import React from "react";
import { Button, Container, ResultSection } from "components";

const Result = ({ score, setScore }) => {
  return (
    <Container>
      <ResultSection score={score}></ResultSection>
      <Button to="/" onClick={() => setScore(0)}>
        테스트 다시하기
      </Button>
    </Container>
  );
};

export default Result;
