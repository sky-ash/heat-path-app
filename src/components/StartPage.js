import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const handleViewPath = () => {
    navigate("/path");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
      <div>
        
        <header className="header">
          <div className="logo">Schneider & sons</div>
          <button onClick={handleHome} className="home-button"/>
        </header>


        <div className="start-page">
          <h1>Heat Path</h1>
          <h2>Become an expert when it comes to heat and health!</h2>
          <button onClick={handleViewPath} className="start-button">
            Start
          </button>
      </div>
    </div>
  );
};

export default StartPage;