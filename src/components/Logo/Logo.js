import styled from "styled-components";
import logo from "../../assets/images/logo.png"

export default function Logo() {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
}

const Container = styled.section`
  img {
    width: 100%;
    height: auto;
  }
`;
