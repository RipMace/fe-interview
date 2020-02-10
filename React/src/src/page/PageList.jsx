import React, { Component } from 'react';
// import Pokemon from '../Components/Pokemon';
import Search from '../Components/Search';
import { getPokemons } from "../../actions/pokemons";
import { connect } from "react-redux";

class PageList extends Component {

  // TODO caricare la lista dei pokemon

  handleSearch = (event) => {
    const value = event.currentTarget.value.toLowerCase().trim();
    // TODO salvare la stringa cercata
  };

  render() {
    const { searchString } = this.state;
    const { collection, isFetched, error } = this.props;

    // TODO filtrare la lista sulla base della stringa salvata
    return (
      <div className="page">
        {error && <div className="page__error">{error}</div>}
        <div className="page__search">
          <Search onChange={this.handleSearch} value={searchString} />
        </div>
        {
          isFetched ?
          <p>Loading...</p>
         :
          <ul className="pokemons">
            {/*TODO visualizzazione della lista dei pokemon*/}
            <li className="pokemons__item" key={pokemon.id}>
              {/*TODO componente pokemon*/}
            </li>
          </ul>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.pokemons,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPokemons: () => dispatch(getPokemons()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageList)
