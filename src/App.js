import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyle";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import RankingPage from "./pages/RankingPage/RankingPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/sign-up"} element={<SignUpPage />} />
        <Route path={"/sign-in"} element={<SignInPage />} />
        <Route path={"/ranking"} element={<RankingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
