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
