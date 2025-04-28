import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const PostSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debouncedSearch = useDebounce(onSearch, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Rechercher un post..."
      value={query}
      onChange={handleChange}
    />
  );
};

export default PostSearch;
