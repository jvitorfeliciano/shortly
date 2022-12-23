import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Input from "../../components/Input /Input";
import Logo from "../../components/Logo/Logo";
import Url from "./Url";
import UserContext from "../../contexts/UserContext";
import Ranking from "../../components/Ranking/Ranking";
import Swal from "sweetalert2";
import api from "../../services/api";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { userData } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const body = { url };

    try {
      const res = await api.shortenUrl(body, userData.token);
      setIsLoading(false);
      console.log(res);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Logo />
      {!userData && <Ranking />}
      {userData && (
        <>
          <ShortUrl onSubmit={handleSubmit}>
            <Input
              placeholder="Links que cabem no bolso"
              name="url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              required
            />
            <Button
              marginTop={"0px"}
              marginLeft={"70px"}
              type="submit"
              isLoading={isLoading}
            >
              {isLoading ? (
                <Loader size={40} color={"white"} />
              ) : (
                "Encurtar Link"
              )}
            </Button>
          </ShortUrl>
          <UrlsContainer>
            <Url />
            <Url />
            <Url />
          </UrlsContainer>
        </>
      )}
    </Container>
  );
}

const ShortUrl = styled.form`
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
