import styled from "styled-components";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
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

const Form = styled.form`
  width: 55vw;
  height: auto;
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;