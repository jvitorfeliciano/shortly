import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyle";
import RankingPage from "./pages/RankingPage/RankingPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<RankingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
