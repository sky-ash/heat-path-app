import React from "react";
import { useNavigate } from "react-router-dom";
import "@material/web/button/filled-button.js";

const StartPage = () => {
  const navigate = useNavigate();

  const handleViewPath = () => {
    navigate("/path");
  };

  return (
    <div className="start-page">
      <h1>Welcome to Heat Path</h1>
      <md-filled-button raised onClick={handleViewPath}>
        View Path
      </md-filled-button>
    </div>
  );
};

export default StartPage;