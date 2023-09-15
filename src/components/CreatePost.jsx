import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("http://localhost:7070/posts", { content })
      .then(() => {
        navigate("/posts");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="post-card">
      <h2>Создать пост</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="action-buttons">
        <button className="action-button" onClick={handleSubmit}>
          Опубликовать
        </button>
        <button className="action-button" onClick={() => navigate("/posts")}>
          Отмена
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
