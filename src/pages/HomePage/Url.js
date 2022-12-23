import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import api from "../../services/api";

export default function Url({
  id,
  shortUrl,
  url,
  visitCount,
  confirmDeletetion,
  updateUrls,
  setUpdateUrls,
}) {
  function navigateToUrl(shortUrl) {
    window.open(api.getShortenedUrl(shortUrl));
    setUpdateUrls(!updateUrls);
  }

  return (
    <UrlContainer>
      <Right>
        <div onClick={() => navigateToUrl(shortUrl)}>{url}</div>
        <div onClick={() => navigateToUrl(shortUrl)}>{shortUrl}</div>
        <div>Quantidade de visitantes: {visitCount}</div>
      </Right>
      <Left onClick={() => confirmDeletetion(id)}>
        <FaTrashAlt />
      </Left>
    </UrlContainer>
  );
}

const UrlContainer = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 42px;
  display: flex;
  cursor: pointer;
`;

const Right = styled.div`
  width: 90%;
  height: 100%;
  background: #80cc74;
  display: flex;
  justify-content: space-between;
  padding: 21px;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px 0px 0px 12px;
  overflow-y: auto;
  div {
    word-break: break-word;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    width: 30%;
    height: auto;
    word-break: break-word;
    text-align: center;
  }
`;

const Left = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 0px 12px 12px 0px;
  cursor: pointer;
  svg {
    font-size: 26px;
    color: #ea4f4f;
  }
`;
