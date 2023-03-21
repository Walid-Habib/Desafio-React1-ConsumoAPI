import { useEffect } from "react";

export default function ({
  pokemonesFiltrados,
  setPokemones,
  setPokemonesFiltrados,
}) {
  useEffect(() => {
    getPokemones();
  }, []);

  const getPokemones = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    setPokemones(data.results);
    setPokemonesFiltrados(data.results);
  };

  return (
    <ul>
      {pokemonesFiltrados.map((pokemon) => (
        <li> {pokemon.name} </li>
      ))}
    </ul>
  );
}
