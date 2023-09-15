import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import ViewPost from "./components/ViewPost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path="/posts/:postId" element={<ViewPost />} />
        <Route path="/posts/:postId/edit" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;

