import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemonThunk } from "../../store/modules/pokemons/thunks";

const Search = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addPokemonThunk(pokemonName, setError, setIsLoading));
    setPokemonName("");
  };

  return (
    <>
      <div>
        <input
          placeholder="Digite o nome do seu pokemon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </div>
      <div>{error && <span>Pokemon não encontrado</span>}</div>
      <div>{isLoading && <span>Loading</span>}</div>
      <div>
        <button disabled={!pokemonName} onClick={handleSearch}>
          Pesquisar
        </button>
      </div>
    </>
  );
};

export default Search;
