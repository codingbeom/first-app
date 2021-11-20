import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerW = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 72px;
`;
const Container = (beomho) => (
  <FlexBox>
    <ContainerW>{beomho.children}</ContainerW>
  </FlexBox>
);
export default Container;
