import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from '../constants';

export const getPokemons = () => {
  return dispatch => {
    dispatch(getPokemonsStarted());
    fetch( 'https://pokeapi.co/api/v2/pokemon', { method: "GET" })
      .then(function(response){
        return response.json();
      })
      .then(function(payload){
        dispatch(getPokemonsSuccess(payload))
      })
      .catch(err => {
        dispatch(getPokemonsError(err));
      });
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
