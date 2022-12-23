import styled from "styled-components";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Input from "../../components/Input /Input";
import Logo from "../../components/Logo/Logo";
import Url from "./Url";

export default function HomePage() {
  return (
    <Container>
      <Logo />
      <ShortUrl>
        <Input placeholder="Links que cabem no bolso" />
        <Button marginTop={"0px"} marginLeft={"70px"} type="submit">
          Encurtar Link
        </Button>
      </ShortUrl>
      <UrlsContainer>
        <Url />
        <Url />
        <Url />
      </UrlsContainer>
    </Container>
  );
}

const ShortUrl = styled.section`
  width: 70vw;
  height: auto;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
`;

const UrlsContainer = styled.section`
  width: 70vw;
  height: auto;
`;
