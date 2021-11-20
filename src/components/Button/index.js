import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleLink = styled(Link)`
  whidth: 100%;
`;

const StyleButton = styled.button`
  font-size: ${(tomato) => (tomato.Size === "big" ? "32px" : "16px")};
    color: #ffffff;
    background-color: ${(purple) => purple.theme.primaryColor100};
    border-radius: 5px;
    border: 0px;
    height: 56px;
    padding: 4px;
    margin: 4px;
    cursor: pointer;
    width: 100%;
    outline: none;
    font-weight: 700;
    &:hover {
      background-color: ${(purpleHo) => purpleHo.theme.primaryColor80};
    }
}`;

const Button = ({ to, onClick, children }) =>
  to ? (
    <StyleLink to={to}>
      <StyleButton onClick={onClick}>{children}</StyleButton>
    </StyleLink>
  ) : (
    <StyleButton onClick={onClick}>{children}</StyleButton>
  );
export default Button;
