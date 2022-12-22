import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input /Input";
import Logo from "../../components/Logo/Logo";

export default function SignUpPage() {
  return (
    <Container>
      <Logo />
      <Form>
        <Input type="text" placeholder="Nome" required />
        <Input type="email" placeholder="E-mail" required />
        <Input type="password" placeholder="Senha" required />
        <Input type="password" placeholder="Confirmar senha" required />
        <Button type="submit">Criar conta</Button>
      </Form>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 55vw;
  height: auto;
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
