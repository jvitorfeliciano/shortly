import { useState } from "react";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Input from "../../components/Input /Input";
import Logo from "../../components/Logo/Logo";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Logo />
      <Form>
        <Input
          width={"100%"}
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleFormChange}
          required
        />
        <Input
          width={"100%"}
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleFormChange}
          required
        />
        <Button marginTop={"61px"} marginLeft={"0px"}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
