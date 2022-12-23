import { useState } from "react";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Input from "../../components/Input /Input";
import Logo from "../../components/Logo/Logo";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(form);
  function handleFormchange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Logo />
      <Form>
        <Input
          type="text"
          placeholder="Nome"
          name="name"
          onChange={handleFormchange}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleFormchange}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleFormchange}
          required
        />
        <Input
          type="password"
          placeholder="Confirmar senha"
          name="confirmPassword"
          onChange={handleFormchange}
          required
        />
        <Button marginTop={"61px"} marginLeft={"0px"} type="submit">
          Criar conta
        </Button>
      </Form>
    </Container>
  );
}
