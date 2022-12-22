import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyle";
import RankingPage from "./pages/RankingPage/RankingPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<RankingPage />} />
        <Route path={"/sign-up"} element={<SignUpPage />} />
        <Route path={"/sign-in"} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
