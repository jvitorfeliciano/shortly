import styled from "styled-components";
import ClassificationData from "./ClassificationData";
import trophy from "../../assets/images/trophy.png";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../../services/api";
import Loader from "../Loader/Loader";
import UserContext from "../../contexts/UserContext";

export default function Ranking() {
  const [ranking, setRanking] = useState(null);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    const getRanking = async () => {
      try {
        const res = await api.getRanking();
        setRanking(res.data);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    };

    getRanking();
  }, []);

  if (!ranking) {
    return (
      <LoaderContainer>
        <Loader size={60} color={"green"} />
      </LoaderContainer>
    );
  }
  return (
    <>
      <RankingLogo>
        <img src={trophy} alt="trophy" />
        <h2>Ranking</h2>
      </RankingLogo>
      <RankingContainer>
        {ranking.map((data) => (
          <ClassificationData
            key={data.id}
            id={data.id}
            name={data.name}
            linksCount={data.linksCount}
            visitCount={data.visitCount}
          />
        ))}
      </RankingContainer>
      {!userData && <Message>Crie sua conta para usar nosso serviço!</Message>}
    </>
  );
}
const LoaderContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
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

const Message = styled.span`
  width: 70vw;
  text-align: center;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
  margin-top: 82px;
`;
