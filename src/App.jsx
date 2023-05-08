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
          path="/"
          element={
            <Layout>
              <Route element={<Home />} />
              <Route element={<Novo />} />
            </Layout>
          }
        />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}
