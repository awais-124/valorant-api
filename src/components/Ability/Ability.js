import React from 'react';
import './Ability.css';

const Ability = ({ ability }) => {
  return (
    <div className='ability'>
      <div className='ability-info'>
        <img
          src={ability.displayIcon}
          alt={ability.displayName}
          className='ability-icon'
        />
        <h3>{ability.displayName}</h3>
      </div>
      <p>{ability.description}</p>
    </div>
  );
};

export default Ability;
