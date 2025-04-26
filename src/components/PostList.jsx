import React from 'react';
import usePosts from '../hooks/usePosts';

const PostList = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Chargement des posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Liste des Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
