import {
  GET_SPECIES_REQUEST,
  GET_SPECIES_SUCCESS,
  GET_SPECIES_FAILURE,
} from '../constants';

const initialState = {
  species: {},
  loading: true,
  error: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SPECIES_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      };

    case GET_SPECIES_SUCCESS:
      return {
        ...state,
        species: action.payload,
        loading: false
      };

    case GET_SPECIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state
  }
}
