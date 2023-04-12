import Accueil from "./pages/Accueil";
import PagePartager from "./pages/PagePartager";
import PagePartagerInegnieur from "./pages/PagePartagerIngenieur";
import Ecommerce from "./pages/Ecommerce";
import Investissement from "./pages/Investissement";
import AccompTechLanding from "./pages/AgronomeProfile";
import AccompTechPages from "./pages/AccompTechPages";
import LoginIngAgronome from "./pages/LoginIngAgronome";
import SignupIngAgronome from "./pages/SignupIngAgronome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";
import FicheTechnique from "./pages/FicheTechnique";
import Chat from "./pages/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AbonnementPage from "./pages/AbonnementPage";
import AccompTechMainPage from "./pages/AccompTechMainPage";
import VideoConference from "./pages/VideoConference";
import ModifyProfileIng from "./pages/ModifyProfileIng";
import AgronomeChat from "./pages/AgronomeChat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagePartager />}>
          <Route index element={<Accueil />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="accompTech" element={<AccompTechPages />}>
            <Route index element={<AccompTechMainPage />} />
            <Route path="videoConference" element={<VideoConference />} />
            <Route path="chat" element={<Chat />} />
            <Route path="fiche-technique" element={<FicheTechnique />} />
            <Route path="abonnement" element={<AbonnementPage />} />
            <Route path="agronomeProfiles" element={<AccompTechLanding />} />
          </Route>
          <Route path="investissement" element={<Investissement />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="Ingenieur" element={<PagePartagerInegnieur />}>
          <Route index element={<AgronomeChat />} />
          <Route path="login" element={<LoginIngAgronome />} />
          <Route path="signup" element={<SignupIngAgronome />} />
          <Route path="profile" element={<ModifyProfileIng />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
