import { combineReducers } from 'redux';
import pokemons from './pokemons';
import moves from './moves';
import species from './species';
import pokemonDetail from './pokemonDetail';

export default combineReducers({
  pokemons,
  moves,
  pokemonDetail,
  species,
})
