import Container from "../../components/container";
import ResultSection from "../../components/ResultSection";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Result = ({ score }) => {
  return (
    <Container>
      <ResultSection score={score}></ResultSection>
      <Link to="/">
        <Button text="테스트 다시하기"></Button>
      </Link>
    </Container>
  );
};

export default Result;
