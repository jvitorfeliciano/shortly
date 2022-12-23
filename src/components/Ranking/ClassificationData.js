import styled from "styled-components";

export default function ClassificationData({
  id,
  name,
  linksCount,
  visitCount,
}) {
  return (
    <Container>
      <p>
        1. {name} - {linksCount} links -{visitCount} visualizações
      </p>
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
