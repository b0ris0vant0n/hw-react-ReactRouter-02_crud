import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:7070/posts/${postId}`).then((response) => {
      setContent(response.data.post.content);
    });
  }, [postId]);

  const handleSubmit = () => {
    axios
      .put(`http://localhost:7070/posts/${postId}`, { content })
      .then(() => {
        navigate(`/posts/${postId}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="post-card">
      <h2>Редактировать пост</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="action-buttons">
        <button className="action-button" onClick={handleSubmit}>
          Сохранить
        </button>
        <button
          className="action-button"
          onClick={() => navigate(`/posts/${postId}`)}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default EditPost;
