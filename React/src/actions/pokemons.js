import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from '../constants';

export const getPokemons = () => {
  return dispatch => {
    dispatch(getPokemonsStarted());
    // TODO fetch della lista dei pokemon, endpoint 'https://pokeapi.co/api/v2/pokemon'
  };
};

export function getPokemonsStarted(id) {
  return { type: GET_POKEMONS_REQUEST, id };
}

export function getPokemonsSuccess(payload) {
  return { type: GET_POKEMONS_SUCCESS, payload };
}

export function getPokemonsError() {
  return { type: GET_POKEMONS_FAILURE };
}
