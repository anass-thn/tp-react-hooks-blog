import { useState } from 'react';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (query = '') => {
    setLoading(true);
    try {
      const url = query
        ? `https://dummyjson.com/posts/search?q=${query}`
        : 'https://dummyjson.com/posts';
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      console.error('Erreur lors de la récupération des posts :', error);
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, fetchPosts };
};

export default usePosts;