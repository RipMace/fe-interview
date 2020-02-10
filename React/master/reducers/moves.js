import {
  GET_MOVES_REQUEST,
  GET_MOVES_SUCCESS,
  GET_MOVES_FAILURE
} from '../constants';

const initialState = {
  moves: [],
  loading: true,
  error: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVES_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      };

    case GET_MOVES_SUCCESS:
      return {
        ...state,
        moves: action.payload,
        loading: false
      };

    case GET_MOVES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state
  }
}
