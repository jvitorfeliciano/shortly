import styled from "styled-components";

export default function ClassificationData() {
  return (
    <Container>
      <p>1. João - 32 links - 1.703.584 visualizações</p>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: auto;
  word-break: break-word;
  p {
    margin-top: 10px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #000000;
  }
`;
