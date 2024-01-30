import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);
    setQuery("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
