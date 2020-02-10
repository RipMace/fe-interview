import React, { Component } from 'react';

class SpecieCard extends Component {
  render() {
    const { number, name, image, types } = this.props;

    let id_string = "" + number;
    let filler = "000";
    let pokemon_id = filler.substring(0, filler.length - id_string.length) + id_string;
    return (
      <div className="specieCard">
        <figure>
          <img async src={image} alt={name} />
        </figure>
        <div>
          <p>#{pokemon_id}</p>
          <h1>{name}</h1>
        </div>
        <div>
          {types.map((item, index) => <h4 key={index}>{item.type.name}</h4>)}
        </div>
      </div>
    )
  }
}

export default SpecieCard;
