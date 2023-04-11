import Accueil from "./pages/Accueil";
import PagePartager from "./pages/PagePartager";
import Ecommerce from "./pages/Ecommerce";
import Investissement from "./pages/Investissement";
import AccompTechLanding from "./pages/AgronomeProfile";
import AccompTechPages from "./pages/AccompTechPages";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import FicheTechnique from "./pages/FicheTechnique";
import Chat from "./pages/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AbonnementPage from "./pages/AbonnementPage";
import AccompTechMainPage from "./pages/AccompTechMainPage";
import VideoConference from "./pages/VideoConference";
import ModifyProfileIng from "./pages/ModifyProfileIng";
import AgronomeChat from "./pages/AgronomeChat";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import Payment from "./pages/Payment";
import NotConnected from "./pages/NotConnected";
import LoginE from "./pages/LoginE";
import Register from "./pages/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='ecommerce' element={<Home />}></Route>
        <Route path='/Product/:id' element={<SinglePage />}></Route>
        <Route path='/Payment/:id' element={<Payment />}></Route>
        <Route path='/Not_connected' element={<NotConnected />} />
        <Route path='/Login-e-commerce' element={<LoginE />}></Route>
        <Route path='/signUp-e-commerce' element={<Register />}></Route>
        <Route path='/' element={<PagePartager />}>
          <Route index element={<Accueil />} />
          <Route path='accompTech' element={<AccompTechPages />}>
            <Route index element={<AccompTechMainPage />} />
            <Route path='videoConference' element={<VideoConference />} />
            <Route path='chat' element={<Chat />} />
            <Route path='fiche-technique' element={<FicheTechnique />} />

            <Route path='abonnement' element={<AbonnementPage />} />
            <Route path='agronomeProfiles' element={<AccompTechLanding />} />
          </Route>
          <Route path='investissement' element={<Investissement />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='profile' element={<ModifyProfileIng />} />
        <Route path='IngChat' element={<AgronomeChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
