import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Novo from "./pages/Novo";
import Erro404 from "./pages/Erro404";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='novo' element={<Novo />} />
          </Route>
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}
