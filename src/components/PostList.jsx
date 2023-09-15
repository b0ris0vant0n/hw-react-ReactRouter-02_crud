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
      <div className="post-card create">
      <Link to="/posts/new"><button className="create-button">Создать пост</button></Link>
      </div>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h2>{post.content}</h2>
          <div className="action-buttons">
            <Link to={`/posts/${post.id}`} className="view-link">
              Подробнее
            </Link>
            <Link to={`/posts/${post.id}/edit`}><button className="action-button">Редактировать</button>
            </Link>
            <button
              className="action-button"
              onClick={() => handleDelete(post.id)}>Удалить</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;

