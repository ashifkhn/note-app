import React from "react";
import "../style/note-search.css";
import { MdSearch } from "react-icons/md";

export const SearchNote = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch size="1.5em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="type to search note..."
      />
    </div>
  );
};
