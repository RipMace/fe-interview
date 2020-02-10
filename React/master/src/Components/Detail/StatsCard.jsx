import React, { Fragment } from 'react';
import Moves from './Moves';

const StatsCard = ({stats, moves}) => {
  return (
    <div>
      <h3>
        Stats
      </h3>
      <Moves movesToGet={moves} />
      <div>
        {stats.map((stat, index) =>
         <Fragment key={index}>
            <p>{stat.stat.name}</p>
            <progress value={stat.base_stat} max="100">{stat.base_stat}%</progress>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
