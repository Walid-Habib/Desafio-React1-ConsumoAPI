import "../src/assets/css/App.css";
import { useEffect, useState } from "react";
import MiApi from "../src/components/MiApi.jsx";
import imagen from "../src/assets/img/Pokemon.png";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [search, setSearch] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("");
  let [pokemonesFiltrados, setPokemonesFiltrados] = useState([]);

  const filtrarPokemones = () => {
    const pokemonesFiltrados = pokemones.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });
    setPokemonesFiltrados(pokemonesFiltrados);
  };

  useEffect(() => {
    pokemonesFiltrados = pokemonesFiltrados.sort((a, b) =>
      ordenamiento == "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setPokemonesFiltrados([...pokemonesFiltrados]);
  }, [ordenamiento]);

  useEffect(() => {
    filtrarPokemones();
  }, [search]);

  return (
    <div className="App">
      <main className="container">
        <div className="encabezado">
          <img src={imagen} alt="" />
          <p>
            <h2>Desafío React</h2>
            <h3>Consumo de la PokeAPI</h3>
          </p>
        </div>
        <hr />
        <nav>
          <span>Buscador</span>
          <input onChange={(e) => setSearch(e.target.value)} />
        </nav>

        <select onChange={(e) => setOrdenamiento(e.target.value)}>
          <option value="" disabled selected>
            Seleccione ordenamiento
          </option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <MiApi
          pokemonesFiltrados={pokemonesFiltrados}
          setPokemones={setPokemones}
          setPokemonesFiltrados={setPokemonesFiltrados}
        />
      </main>
    </div>
  );
}

export default App;
