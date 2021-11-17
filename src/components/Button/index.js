import React from "react";
import styled from "styled-components";

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

const Button = (toamto) => {
  return <StyleButton onClick={toamto.onClick}>{toamto.text}</StyleButton>;
};
export default Button;
