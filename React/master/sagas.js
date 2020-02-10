import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getPokemonsSuccess,
  getPokemonsError,
  getPokemonDetailSuccess,
  getPokemonDetailError,
} from './actions';
import {
  GET_POKEMONS_REQUEST,
  GET_POKEMON_DETAIL_REQUEST,
} from './constants';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPokemonList() {
  try {
    const response = yield call(fetch, 'https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemons = yield response.json();
    yield put(getPokemonsSuccess(pokemons));
  } catch (err) {
    yield put(getPokemonsError(err));
  }
}

/*
  takeLatest
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* getPokemonRequest() {
  yield takeLatest(GET_POKEMONS_REQUEST, fetchPokemonList);
}

function* fetchPokemonDetail({ id }) {
  try {
    const response = yield call(fetch, `https://pokeapi.co/api/v2/pokemon/${id}`);
    const detail = yield response.json();
    yield put(getPokemonDetailSuccess(detail));
  } catch (err) {
    yield put(getPokemonDetailError(err));
  }
}

function* getPokemonDetail() {
  yield takeLatest(GET_POKEMON_DETAIL_REQUEST, fetchPokemonDetail);
}

export default [
  getPokemonRequest,
  getPokemonDetail
];
