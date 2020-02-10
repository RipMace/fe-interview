import React, { Component } from 'react';
import Pokemon from '../Components/Pokemon';
import Search from '../Components/Search';
import { getPokemons } from "../../actions/pokemons";
import { connect } from "react-redux";

class PageList extends Component {
  state = {
    searchString: '',
  };

  componentDidMount() {
    this.props.getPokemons();
  }

  handleSearch = (event) => {
    const value = event.currentTarget.value.toLowerCase().trim();
    this.setState({ searchString: value })
  };

  render() {
    const { searchString } = this.state;
    const { collection, isFetched, error } = this.props;

    const filteredCollection = collection.filter((pok) => pok.name.includes(searchString));
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
            {filteredCollection.map((pokemon) => (
              <li className="pokemons__item" key={pokemon.id}>
                <Pokemon pokemon={pokemon} />
              </li>
            ))}
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
