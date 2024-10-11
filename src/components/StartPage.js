import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const handleViewPath = () => {
    navigate("/path");
  };

  return (
    <div className="start-page">
      <h1>Welcome to Heat Path</h1>
      <button onClick={handleViewPath} className="nav-button">
        View Path
      </button>
    </div>
  );
};

export default StartPage;
