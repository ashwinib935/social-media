import React from "react";
import { sortByDate } from "../../utils/sortByDate";
import "./Sortbar.css";
function Sortbar({ setActiveSort, activeSort, timelinePosts }) {
  const handleTrending = () => {
    setActiveSort("trending");
    sortByDate(timelinePosts, activeSort);
  };
  const handleLatest = () => {
    setActiveSort("latest");
    sortByDate(timelinePosts, activeSort);
  };
  return (
    <div className="sortbar-container">
      <button onClick={handleTrending}>Trending</button>
      <button onClick={handleLatest}>Latest</button>
    </div>
  );
}

export default Sortbar;
