import React, { useState } from 'react';
import './App.css';

import agents from './api';
import bundles from './bundles';

import shuffle from './assets/shuffle.png';

import Bundle from './components/Bundles/Bundle';
import Agents from './components/Agents/Agents';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
	const [filteredAgents, setFilteredAgents] = useState(agents);
	const [showBundles, setShowBundles] = useState(true);
	const [bundlesData, setBundles] = useState(bundles);
	const [heading, setHeading] = useState('Gun Bundle');
	const [count, setCount] = useState(bundles.length);
	const [searchValue, setSearchValue] = useState('');

	const displayBundles = () => {
		setHeading('Gun Bundle');
		setShowBundles(true);
		setCount(bundlesData.length);
		setSearchValue('');
	};

	const shuffleBundles = () => {
		if (!showBundles) return;
		const randomBundles = [...bundlesData].sort(() => Math.random() - 0.5);
		setBundles(randomBundles);
	};

	const isAllAgentsPage = heading.toUpperCase() === 'VALORANT AGENT';

	const filterBySearch = (data, key) =>
		data.filter((item) =>
			item[key].toUpperCase().startsWith(searchValue.toUpperCase())
		);

	const searchFilteredBundles =
		showBundles && filterBySearch(bundlesData, 'displayName');
	const searchFilteredAgents =
		isAllAgentsPage && filterBySearch(agents, 'displayName');

	return (
		<>
			<Navbar
				setFilteredAgents={setFilteredAgents}
				setShowBundles={setShowBundles}
				agents={agents}
				displayBundles={displayBundles}
				setHeading={setHeading}
				setCount={setCount}
				resetFilter={() => setSearchValue('')}
			/>

			<div className='App'>
				<div id='heading'>
					<h1>
						{`${heading}s`}
						<span className='count'>{count}</span>
						{showBundles && (
							<span className='shuffle' onClick={shuffleBundles}>
								<img src={shuffle} alt='Shuffle-Icon' />
							</span>
						)}
					</h1>
					{(showBundles || isAllAgentsPage) && (
						<SearchBar
							value={searchValue}
							onInput={(value) => setSearchValue(value)}
							style={{ justifyContent: 'center' }}
						/>
					)}
				</div>
				{!showBundles ? (
					<Agents
						agents={agents}
						_filter={searchFilteredAgents || filteredAgents}
					/>
				) : (
					<Bundle bundlesData={searchFilteredBundles} />
				)}
			</div>
		</>
	);
}

export default App;
