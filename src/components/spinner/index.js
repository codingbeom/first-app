import React from "react";
import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  const themeC = useContext(ThemeContext);
  const color = themeC.primaryColor100;

  return (
    <Flex>
      <RingLoader color={color} />
    </Flex>
  );
};

export default Spinner;
