import { useState } from "react";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Input from "../../components/Input /Input";
import Logo from "../../components/Logo/Logo";
import api from "../../services/api";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate("/");

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.signIn(form);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      setIsLoading(false);
    }
  }
  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
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
        <Button
          marginTop={"61px"}
          marginLeft={"0px"}
          type="submit"
          isLoading={isLoading}
        >
          {isLoading ? <Loader size={40} color={"white"} /> : "Entrar"}
        </Button>
      </Form>
    </Container>
  );
}
