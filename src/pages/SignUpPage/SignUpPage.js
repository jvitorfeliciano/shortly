import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Input from "../../components/Input /Input";
import Loader from "../../components/Loader/Loader";
import Logo from "../../components/Logo/Logo";
import api from "../../services/api";
import Swal from "sweetalert2";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleFormchange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.signUp(form);
      navigate("/");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
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
        <Button
          marginTop={"61px"}
          marginLeft={"0px"}
          isLoading={isLoading}
          type="submit"
        >
          {isLoading ? <Loader size={40} color={"white"} /> : "Criar conta"}
        </Button>
      </Form>
    </Container>
  );
}
