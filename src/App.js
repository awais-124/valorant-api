import React, { useState } from 'react';
import './App.css';

import agents from './api';
import bundles from './bundles';

import shuffle from './assets/shuffle.png';

import Bundle from './components/Bundles/Bundle';
import Agents from './components/Agents/Agents';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [filteredAgents, setFilteredAgents] = useState(agents);
  const [showBundles, setShowBundles] = useState(true);
  const [bundlesData, setBundles] = useState(bundles);
  const [heading, setHeading] = useState('Gun Bundle');
  const [count, setCount] = useState(bundles.length);

  const displayBundles = () => {
    setHeading('Gun Bundle');
    setShowBundles(true);
    setCount(bundlesData.length);
  };

  const shuffleBundles = () => {
    if (!showBundles) return;
    const randomBundles = [...bundlesData].sort(() => Math.random() - 0.5);
    setBundles(randomBundles);
  };

  return (
    <>
      <Navbar
        setFilteredAgents={setFilteredAgents}
        setShowBundles={setShowBundles}
        agents={agents}
        displayBundles={displayBundles}
        setHeading={setHeading}
        setCount={setCount}
      />
      <div className='App'>
        <h1>
          {`${heading}s`}
          <span className='count'>{count}</span>
          {showBundles && (
            <span className='shuffle' onClick={shuffleBundles}>
              <img src={shuffle} alt='Shuffle-Icon' />
            </span>
          )}
        </h1>
        {!showBundles ? (
          <Agents agents={agents} _filter={filteredAgents} />
        ) : (
          <Bundle bundlesData={bundlesData} />
        )}
      </div>
    </>
  );
}

export default App;
