import styled from "styled-components";

const Button = styled.button`
  width: 182px;
  height: 60px;
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  background: #5d9040;
  border-radius: 12px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  pointer-events: ${(props) => (props.isLoading ? "none" : "")};
  opacity: ${(props) => (props.isLoading ? "0.5" : "1")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
