import React from 'react';
import Ability from '../Ability/Ability';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  return (
    <div className='character-card'>
      <img
        src={character.fullPortrait}
        alt={character.displayName}
        className='character-image'
      />
      <h2>{character.displayName}</h2>
      <div className='role'>
        <img
          src={character.role?.displayIcon}
          alt={character.role?.displayName}
        />
        <h3>{character.role?.displayName}</h3>
        <img
          src={character.role?.displayIcon}
          alt={character.role?.displayName}
        />
      </div>
      <p>{character.description}</p>
      <div className='abilities'>
        <h2>Abilities</h2>
        {character.abilities.map((ability) => (
          <Ability key={ability.slot} ability={ability} />
        ))}
      </div>
    </div>
  );
};

export default CharacterCard;
