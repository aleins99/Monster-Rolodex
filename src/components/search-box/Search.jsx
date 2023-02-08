import React from "react";
import "./Search.css";
const SearchField = ({ onChangeHandler }) => {
  return (
    <input className="search-box" type="search" onChange={onChangeHandler} />
  );
};

export default SearchField;
