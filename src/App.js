import "./App.css";
import Accueil from "./pages/Accueil";
import PagePartager from "./pages/PagePartager";
import Ecommerce from "./pages/Ecommerce";
import Investissement from "./pages/Investissement";
import AccompTech from "./pages/AccompTech";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagePartager />}>
          <Route index element={<Accueil />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="accomp-tech" element={<AccompTech />} />
          <Route path="investissement" element={<Investissement />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
