import React, { useContext } from 'react';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
import ThemeToggle from './components/ThemeToggle';
import { ThemeContext } from './context/ThemeContext';
import usePosts from './hooks/usePosts';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);
  const { posts, loading, fetchPosts } = usePosts();

  const handleSearch = (query) => {
    fetchPosts(query);
  };

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <PostSearch onSearch={handleSearch} />
      {loading ? <p>Chargement...</p> : <PostList posts={posts} />}
    </div>
  );
}

export default App;