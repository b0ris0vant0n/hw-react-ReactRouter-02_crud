import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ViewPost = () => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:7070/posts/${postId}`).then((response) => {
      setPost(response.data.post);
    });
  }, [postId]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:7070/posts/${postId}`)
      .then(() => {
        navigate("/posts");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="post-card">
      <h2>{post.content}</h2>
      <div className="action-buttons">
        <button className="action-button" onClick={handleDelete}>
          Удалить
        </button>
        <button
          className="action-button"
          onClick={() => navigate(`/posts/${postId}/edit`)}
        >
          Редактировать
        </button>
      </div>
    </div>
  );
};

export default ViewPost;
