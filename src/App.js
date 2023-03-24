import "./App.css";
import Accueil from "./pages/Accueil";
import PagePartager from "./pages/PagePartager";
import Ecommerce from "./pages/Ecommerce";
import Investissement from "./pages/Investissement";
import AccompTech from "./pages/AccompTechLanding";
import AccompTechPages from "./pages/AccompTechPages";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import FicheTechnique from "./pages/FicheTechnique";
import Chat from "./pages/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagePartager />}>
          <Route index element={<Accueil />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="accomp-tech-landing" element={<AccompTech />}></Route>
          <Route path="accomp-tech" element={<AccompTechPages />}></Route>
          <Route path="fiche-technique" element={<FicheTechnique />} />
          <Route path="chat" element={<Chat />} />
          <Route path="investissement" element={<Investissement />} />

          <Route path="*" element={<Error />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
