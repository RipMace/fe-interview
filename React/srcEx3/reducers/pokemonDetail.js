import {
  GET_POKEMON_DETAIL_REQUEST,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_FAILURE,
} from '../constants';

const initialState = {
  detail: {},
  loading: true,
  error: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_DETAIL_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      };

    case GET_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload,
        loading: false
      };

    case GET_POKEMON_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state
  }
}
