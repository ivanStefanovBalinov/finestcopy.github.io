import React from "react";
import "./SearchInput.scss";

const SearchInput = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Търсене..." />
    </form>
  );
};

export default SearchInput;
