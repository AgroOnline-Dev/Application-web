import ReactDOM from "react-dom/client";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Nopage from "./pages/Nopage";
import SinglePage from "./pages/SinglePage";
import Payment from "./pages/Payment";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Payment/:id' element={<Payment />}></Route>
        <Route path='*' element={<Nopage />}></Route>
        <Route path='/Product/:id' element={<SinglePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
