import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyle";
import RankingPage from "./pages/RankingPage/RankingPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<RankingPage />} />
        <Route path={"/sign-up"} element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
