import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 21px;
  margin-bottom: 25px;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  ::placeholder {
    color: #9c9c9c;
  }
  :focus {
    outline-color: #80cc74;
  }
`;

export default Input;
