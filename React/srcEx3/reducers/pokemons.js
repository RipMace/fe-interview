import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE
} from '../constants';

const initialState = {
  collection: [],
  loading: true,
  error: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      };

    case GET_POKEMONS_SUCCESS:
      const collection = Object.keys(action.payload.results).map((key, index) => ({
        id: index + 1,
        ...action.payload.results[key]
      }));
      return {
        ...state,
        collection,
        loading: false
      };

    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state
  }
}
