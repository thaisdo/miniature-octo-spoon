import React, { useContext } from "react";
import ContatosContext from "../contexts/ContatosContext";

function Home() {
  const { meusContatos } = useContext(ContatosContext);
  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ol>
        {meusContatos.map((contato, key) => (
          <li key={key}>
            {contato.nome} - {contato.telefone}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;
