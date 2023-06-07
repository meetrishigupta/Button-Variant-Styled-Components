import styled from "styled-components";

export const ButtonView = styled.button`
  outline: none;
  font-size: 20px;
  font-weight: 700;
  width: 250px;
  height: 50px;
  background-color: ${(props) => (props.filled ? props.bg || "#000" : "#fff")};
  color: ${(props) => (props.filled ? props.color || "#fff" : "#000")};
  border: ${(props) => (props.filled ? "none" : "3px solid #000")};
`;
