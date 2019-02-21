import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import SearchIcon from '../icons/SearchIcon';

const Search = ({ onChange }) => {
  const handleSearchChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className="search-root">
      <div className="icon">
        <SearchIcon />
      </div>
      <input
        className="input"
        type="text"
        onChange={handleSearchChange}
        placeholder="search"
      />
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Search;
