import { useState, useEffect } from "react";
import data from "./data.json";
import PersonTable from "./components/PersonTable";
import Filter from "./components/Filter";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [personas, setPersonas] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    setPersonas(data);
  }, []);

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const personasFiltradas = personas.filter(
    (persona) =>
      persona.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      persona.pais.toLowerCase().includes(filtro.toLowerCase())
  );
  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Información de Personas</h1>
      <Filter filtro={filtro} onFiltroChange={handleFiltroChange} />
      <PersonTable personas={personasFiltradas} />
    </div>
  );
}

export default App;
