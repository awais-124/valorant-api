import React from 'react';
import './Navbar.css';

import logo from '../../assets/download.jpeg';
import hamburger from '../../assets/hamburger.png';

function Navbar({
  setCount,
  setFilteredAgents,
  setShowBundles,
  agents,
  displayBundles,
  setHeading,
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle hamburger menu
  const filterAgents = (key) => {
    setShowBundles(false);
    if (key === 'All') {
      setHeading('Valorant Agent');
      setFilteredAgents(agents);
      setCount(agents.length);
      return;
    }
    const newAgents = agents.filter((agent) => agent.role.displayName === key);
    setHeading(key);
    setFilteredAgents(newAgents);
    setCount(newAgents.length);
  };

  return (
    <nav className='nav-bar'>
      <img src={logo} alt='Valorant-logo' />
      <div className={`nav-list-container ${isMenuOpen ? 'open' : ''}`}>
        <ul className='nav-list'>
          <li onClick={displayBundles}>Bundles</li>
          <li onClick={() => filterAgents('All')}>Agents</li>
          <li onClick={() => filterAgents('Sentinel')}>Sentinels</li>
          <li onClick={() => filterAgents('Controller')}>Controllers</li>
          <li onClick={() => filterAgents('Duelist')}>Duelists</li>
          <li onClick={() => filterAgents('Initiator')}>Initiators</li>
        </ul>
      </div>
      <img
        src={hamburger}
        alt='hamburger-menu-image'
        className='bar-image'
        onClick={toggleMenu}
      />
    </nav>
  );
}

export default Navbar;
