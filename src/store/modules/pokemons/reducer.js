import { ADD_POKEMONS } from "./actionsTypes";

const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMONS:
      const { pokemon } = action;
      return [...state, pokemon];

    default:
      return state;
  }
};

export default pokemonsReducer;
