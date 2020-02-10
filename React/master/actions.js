import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
  GET_POKEMON_DETAIL_REQUEST,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_FAILURE,
  GET_MOVES_SUCCESS,
  GET_MOVES_REQUEST,
  GET_SPECIES_REQUEST,
  GET_SPECIES_SUCCESS,
  GET_SPECIES_FAILURE,
} from './constants';

// export const getPokemons = () => {
//   return dispatch => {
//     dispatch(getPokemonsStarted());
//     fetch( 'https://pokeapi.co/api/v2/pokemon?limit=151', { method: "GET" })
//       .then(function(response){
//         return response.json();
//       })
//       .then(function(payload){
//         dispatch(getPokemonsSuccess(payload))
//       })
//       .catch(err => {
//         dispatch(getPokemonsError(err));
//       });
//   };
// };

export function getPokemonsStarted() {
  return { type: GET_POKEMONS_REQUEST};
}

export function getPokemonsSuccess(payload) {
  return { type: GET_POKEMONS_SUCCESS, payload };
}

export function getPokemonsError() {
  return { type: GET_POKEMONS_FAILURE };
}


export function getPokemonDetailStarted(id) {
  return { type: GET_POKEMON_DETAIL_REQUEST, id};
}

export function getPokemonDetailSuccess(payload) {
  return { type: GET_POKEMON_DETAIL_SUCCESS, payload };
}

export function getPokemonDetailError() {
  return { type: GET_POKEMON_DETAIL_FAILURE };
}

export const getMoves = (movesToGet) => {
  return dispatch => {
    dispatch(getMovesStarted());
    const movesPromises = movesToGet.map(({ move }) => {
      return fetch( move.url, { method: "GET" })
        .then(function(response){
          return response.json();
        })
    });
    Promise.all(movesPromises)
    .then(function(payload){
      dispatch(getMovesSuccess(payload))
    })
    .catch(err => {
      dispatch(getMovesError(err));
    });
  };
};

export function getMovesStarted() {
  return { type: GET_MOVES_REQUEST};
}

export function getMovesSuccess(payload) {
  return { type: GET_MOVES_SUCCESS, payload };
}

export function getMovesError() {
  return { type: GET_POKEMONS_FAILURE };
}


export function getSpecies(id) {
  return async function (dispatch) {
    dispatch(getSpeciesStarted());
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then(response => {
        return response.json()
    })
    .then((payload) => {
      dispatch(getSpeciesSuccess(payload))
    })
    .catch(error => {
      dispatch(getSpeciesError(error))
      }
    );
  }
}

export function getSpeciesStarted() {
  return { type: GET_SPECIES_REQUEST};
}

export function getSpeciesSuccess(payload) {
  return { type: GET_SPECIES_SUCCESS, payload };
}

export function getSpeciesError() {
  return { type: GET_SPECIES_FAILURE };
}
