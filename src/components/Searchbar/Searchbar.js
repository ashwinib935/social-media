import React, { useState } from "react";
import SearchedUserModal from "../SearchedUserModal/SearchedUserModal";
import "./Searchbar.css";
function Searchbar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="sticky top-0.5 z-30">
      <div className="search-container relative m-2 w-[80%] mx-auto rounded-full border focus-within:border-primary">
        <input
          type="text"
          placeholder="Search users..."
          className="bg-inherit py-2 px-3 w-[80%] outline-none rounded-full search-input"
          fdprocessedid="6qjzte"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass ml-2 absolute right-4 top-3"></i>
      </div>
      {searchValue.length > 0 ? (
        <div className="absolute top-15 w-9/10 mx-2 ">
          <SearchedUserModal searchValue={searchValue} />
        </div>
      ) : null}
    </div>
  );
}

export default Searchbar;
