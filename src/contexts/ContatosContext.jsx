import React, { createContext, useState } from 'react';

const ContatosContext = createContext();

export function ContatosContextProvider(props) {
  const [contatos, setContatos] = useState([]);

  const incluir = (contato) => {
    setContatos([...contatos, contato]);
  };

  const contexto = {
    meusContatos: contatos,
    incluirContato: incluir,
  };

  return (
    <ContatosContext.Provider value={contexto}>
      {props.children}
    </ContatosContext.Provider>
  );
}

export default ContatosContext;