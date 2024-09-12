import React from "react";
import "./SearchBar.css";

function SearchBar({ style, value, onInput }) {
	return (
		<div id="search-container" style={style}>
			<label id="search-label">
				<svg
					id="search-icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24">
					<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
				</svg>
			</label>
			<input
				type="text"
				name="search-bar"
				id="search-bar"
				value={value}
				onChange={(e) => onInput(e.target.value)}
				placeholder="Filter by name"
			/>
		</div>
	);
}

export default SearchBar;
