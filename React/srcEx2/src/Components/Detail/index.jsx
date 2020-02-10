import React, { PureComponent } from 'react';
import SpecieCard from './SpecieCard';
import AnagCard from './AnagCard';
import StatsCard from './StatsCard';
import SpritesCard from './SpritesCard';

// TODO che cosa fa il PureComponent?
class PokemonDetail extends PureComponent {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="pokemon-detail">
        <SpecieCard
          number={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types}
        />
        <div className="pokemon-detail_subdetail">
          <AnagCard
            height={pokemon.height}
            weight={pokemon.weight}
            ablities={Object.values(pokemon.abilities)}
          />
          <StatsCard
            stats={Object.values(pokemon.stats)}
            moves={pokemon.moves}
          />
          <SpritesCard
            sprites={pokemon.sprites}
            name={pokemon.name}
          />
        </div>
      </div>
    )
  }
}

export default PokemonDetail;
