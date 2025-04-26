import React, { useState } from 'react';
import usePosts from '../hooks/usePosts';
import useDebounce from '../hooks/useDebounce'; 

const PostSearch = () => {
  const { posts, loading, error } = usePosts();
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500); 

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  if (loading) return <p>Chargement des posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Recherche de Posts</h2>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostSearch;
