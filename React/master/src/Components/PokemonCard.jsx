import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

class PokemonCard extends PureComponent {
  render() {
    const { pokemon } = this.props;

    return (
      <div className="pokemon">
        <Link to={`/detail/${pokemon.id}`}>
          <div
            className="pokemon__sprite"
            style={{
              backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.id
              }.png`})`
            }}
          />
          <p className="pokemon__name">{pokemon.name}</p>
        </Link>
      </div>
    )
  }
}

export default PokemonCard
