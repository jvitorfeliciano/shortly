import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyle";
import Header from "./components/Header/Header";
import UserContext from "./contexts/UserContext";
import HomePage from "./pages/HomePage/HomePage";
import RankingPage from "./pages/RankingPage/RankingPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  const [userData, setUserData] = useState(undefined);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <GlobalStyle />;
        <Header />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/sign-up"} element={<SignUpPage />} />
          <Route path={"/sign-in"} element={<SignInPage />} />
          <Route path={"/ranking"} element={<RankingPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
