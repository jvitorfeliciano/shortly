import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import StyledLink from "../StyledLink/StyledLink";

export default function Logo() {
  return (
    <Container>
      <StyledLink to="/">
        <img src={logo} alt="logo" />
      </StyledLink>
    </Container>
  );
}

const Container = styled.section`
  img {
    width: 100%;
    height: auto;
  }
`;
