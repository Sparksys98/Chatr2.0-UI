import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onChange }) => (
  <div className="form-group col-12 mx-auto">
    <div className="input-group my-3">
      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="input-group-append">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </div>
  </div>
);

export default SearchBar;
