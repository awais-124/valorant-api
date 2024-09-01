import React from 'react';
import './Bundles.css';

function Bundle({ bundlesData }) {
  return (
    <div className='bundles-list'>
      {!bundlesData ? (
        <h1>.......... Fetching bundles ..........</h1>
      ) : (
        bundlesData.map((bundle) => (
          <div className='bundle-box' key={bundle.uuid}>
            <img
              src={bundle.displayIcon || bundle.displayIcon}
              className='bundles-image'
              alt={bundle.description}
            />
            <h3>{bundle.displayName}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default Bundle;
