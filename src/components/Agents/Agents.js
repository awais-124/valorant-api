import React from 'react';
import './Agents.css';

import CharacterCard from './CharacterCard';

function Agents({ agents, _filter }) {
  return (
    <div className='character-list'>
      {!agents ? (
        <h1>.......... Fetching data ..........</h1>
      ) : (
        _filter.map((character) => (
          <CharacterCard key={character.uuid} character={character} />
        ))
      )}
    </div>
  );
}

export default Agents;
