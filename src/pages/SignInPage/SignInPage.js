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
        <Input width={"100%"} type="email" placeholder="E-mail" required />
        <Input width={"100%"} type="password" placeholder="Senha" required />
        <Button marginTop={"61px"} marginLeft={"0px"}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
