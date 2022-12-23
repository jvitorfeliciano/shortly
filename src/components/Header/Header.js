import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import StyledLink from "../StyledLink/StyledLink";

export default function Header() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  function logOut() {
    setUserData(undefined);
    localStorage.removeItem("userData");
    navigate("/");
  }

  return (
    <Container>
      {userData && <Greetings>Seja bem-vindo(a), {userData.name}!</Greetings>}
      <Menu>
        {!userData && (
          <>
            <StyledLink to="/sign-in">
              <div>Entrar</div>
            </StyledLink>
            <StyledLink to="/sign-up">
              <div>Cadastrar</div>
            </StyledLink>
          </>
        )}
        {userData && (
          <>
            <StyledLink to="/">
              <div>Home</div>
            </StyledLink>
            <StyledLink to="/ranking">
              <div>Ranking</div>
            </StyledLink>
            <StyledLink onClick={logOut}>
              <div>Sair</div>
            </StyledLink>
          </>
        )}
      </Menu>
    </Container>
  );
}

const Container = styled.header`
  width: 100vw;
  height: 90px;
  margin-bottom: 26px;
  position: relative;
`;

const BaseFormat = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  position: absolute;
  bottom: 0;
`;

const Greetings = styled(BaseFormat)`
  left: 250px;
  color: #5d9040;
`;

const Menu = styled(BaseFormat)`
  display: flex;
  right: 250px;
  color: #9c9c9c;
  div {
    margin-left: 21px;
    :hover {
      color: #5d9040;
    }
  }
`;
