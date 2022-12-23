import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
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
        <Button marginTop={"61px"} marginLeft={"0px"} type="submit">
          Criar conta
        </Button>
      </Form>
    </Container>
  );
}
