import styled from "styled-components";
import ClassificationData from "./ClassificationData";
import trophy from "../../assets/images/trophy.png";

export default function Ranking() {
  return (
    <>
      <RankingLogo>
        <img src={trophy} alt="trophy" />
        <h2>Ranking</h2>
      </RankingLogo>
      <RankingContainer>
        <ClassificationData />
      </RankingContainer>
    </>
  );
}

const RankingLogo = styled.section`
  display: flex;
  align-items: center;
  margin-top: 82px;
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #000000;
    margin-left: 10px;
  }
  img {
    width: 56px;
    height: 50px;
  }
`;

const RankingContainer = styled.section`
  width: 70vw;
  height: 250px;
  margin-top: 57px;
  overflow-y: auto;
  padding: 0px 40px;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
`;
