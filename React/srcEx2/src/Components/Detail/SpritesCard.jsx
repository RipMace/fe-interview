import React from 'react';

const SpritesCard = ({sprites, name}) => {
  // TODO gestisci la possibilità di filtrare le immagini senza modificare il componente in una classe
  return (
    <div>
      <h3>
        Sprites
      </h3>
      <input
        type="checkbox"
        name="shiny"
      />
        Only Shiny
      <div>
        {
          Object.keys(sprites)
            .map((key, index) => {
                return (
                  <figure key={index}>
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
