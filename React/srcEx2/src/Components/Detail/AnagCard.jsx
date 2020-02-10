import React from 'react';

const AnagCard = ({height, weight, ablities}) => {
  return (
    <div>
      <h3>
        Details
      </h3>
      <div>
        <p><strong>Height:</strong> {height / 10} m</p>
        <p><strong>Weight:</strong> {weight / 10} kg</p>
      </div>
      <div>
        <strong>Abilities</strong>
        {ablities.map((ability, index) => <p key={index}>{ability.ability.name}</p>)}
      </div>
    </div>
  );
};

export default AnagCard;
