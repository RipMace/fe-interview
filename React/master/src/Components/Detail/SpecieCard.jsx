import React, { Component } from 'react';
import { ImgContext } from '../shared/ImgContext';
import SpeciesHOC from "../shared/SpeciesHOC";

class SpecieCard extends Component {
  render() {
    const { number, name, image, types, desc } = this.props;

    let id_string = "" + number;
    let filler = "000";
    let pokemon_id = filler.substring(0, filler.length - id_string.length) + id_string;
    return (
      <div className="specieCard">
        <ImgContext.Consumer>
          {({animation}) => (
            <figure className={animation}>
              <img async src={image} alt={name} />
            </figure>
          )}
        </ImgContext.Consumer>
        <div>
          <p>#{pokemon_id}</p>
          <h1>{name}</h1>
          <p>{desc}</p>
        </div>
        <div>
          {types.map((item, index) => <h4 key={index}>{item.type.name}</h4>)}
        </div>
      </div>
    )
  }
}

export default SpeciesHOC(SpecieCard);
