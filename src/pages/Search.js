import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import "../css/Search.css";

function Search() {
  return (
    <div className="search">
      <div className='search__input'>
        <SearchIcon />
        <input />
        <MicIcon />
      </div>
    </div>
  );
}

export default Search;
