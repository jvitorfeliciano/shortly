import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Input from "../../components/Input /Input";
import Logo from "../../components/Logo/Logo";

export default function SignInPage() {
  return (
    <Container>
      <Logo />
      <Form>
        <Input type="email" placeholder="E-mail" required />
        <Input type="password" placeholder="Senha" required />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
