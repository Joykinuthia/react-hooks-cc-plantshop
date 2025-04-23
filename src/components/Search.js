import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="search">
      <label>Search Plants:</label>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
