import React, { useState, useEffect } from 'react';
import Results from './Results';
import useFetchGitRepos from '../hooks/useFetchGitRepos';
import '../style.css';

const SearchReposWithCustomHook = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('markerikson');
  const repos = useFetchGitRepos(searchQuery);

  const handleChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearchClick = () => {
    setSearchQuery(searchInput);
    setSearchInput('');
  }

  return (
    <>
      <div className="container">
          <h2>Search for repos</h2>
          <input
              type="text"
              placeholder="search..."
              value={searchInput}
              onChange={handleChangeSearchInput}
            />
          <button
            className="search"
            onClick={handleSearchClick}
          >
            Search
          </button>
      </div>
      <Results repos={repos} />
    </>
  )
}

export default SearchReposWithCustomHook;

