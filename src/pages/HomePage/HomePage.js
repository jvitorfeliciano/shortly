import { useContext, useEffect, useState } from "react";
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
  const [urls, setUrls] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updateUrls, setUpdateUrls] = useState(false);

  const { userData } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const body = { url };

    try {
      await api.shortenUrl(body, userData.token);
      setIsLoading(false);
      setUpdateUrls(!updateUrls);
      setUrl("");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const getUrls = async () => {
      try {
        const res = await api.getUserUrls(userData.token);
        setUrls(res.data.shortenedUrls);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    };
    if (userData?.token) {
      getUrls();
    }
  }, [updateUrls]);

  if (userData?.token && !urls) {
    return <Loader size={60} color={"green"} />;
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
            {urls.map((url) => (
              <Url
                id={url.id}
                url={url.url}
                shortUrl={url.shortUrl}
                visitCount={url.visitCount}
              />
            ))}
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
