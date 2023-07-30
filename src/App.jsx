import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import Formulario from "./components/Formulario";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState ('');

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/*<Formulario />*/}
    </>
  )
}

export default App
