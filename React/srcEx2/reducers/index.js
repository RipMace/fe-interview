import { combineReducers } from 'redux';
import pokemons from './pokemons';
import moves from './moves';

export default combineReducers({
  pokemons,
  moves,
})
