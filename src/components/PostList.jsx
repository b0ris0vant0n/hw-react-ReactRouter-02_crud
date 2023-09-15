import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7070/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleDelete = (postId) => {
    axios
      .delete(`http://localhost:7070/posts/${postId}`)
      .then(() => {
        axios.get("http://localhost:7070/posts").then((response) => {
          setPosts(response.data);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Список постов</h1>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h2>{post.content}</h2>
          <div className="action-buttons">
            <Link to={`/posts/${post.id}`} className="view-link">
              Подробнее
            </Link>
            <Link to={`/posts/${post.id}/edit`} className="action-button">
              Редактировать
            </Link>
            <button
              className="action-button"
              onClick={() => handleDelete(post.id)}
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
      <Link to="/posts/new">Создать пост</Link>
    </div>
  );
};

export default PostList;

