import React, { useState, useContext } from 'react';
import { ImgContext } from '../shared/ImgContext';

const SpritesCard = ({sprites, name}) => {
  const [shinyFilter, setShinyFilter] = useState(false);
  const { animation } = useContext(ImgContext);
  return (
    <div>
      <h3>
        Sprites
      </h3>
      <input
        type="checkbox"
        name="shiny"
        value={shinyFilter}
        onChange={() => setShinyFilter(!shinyFilter)}
      />
        Only Shiny
      <div>
        {
          Object.keys(sprites)
            .filter(key => {
              if (shinyFilter) {
                return key.includes('shiny') && sprites[key] !== null
              }
              return sprites[key] !== null
            })
            .reverse()
            .map((key, index) => {
                return (
                  <figure key={index} className={animation}>
                    <img async src={sprites[key]} alt={name} />
                  </figure>
                )
              }
            )
        }
      </div>
    </div>
  );
};

export default SpritesCard;
