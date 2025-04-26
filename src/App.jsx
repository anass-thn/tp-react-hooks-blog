import React from 'react';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';

function App() {
  return (
    <div className="App">
      <h1>Mon Blog</h1>
      <PostSearch />
      {/* <PostList />  On peut commenter PostList car PostSearch affiche aussi les posts */}
    </div>
  );
}

export default App;
