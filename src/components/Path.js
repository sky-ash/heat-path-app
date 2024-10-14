import React from "react";
import { useNavigate } from "react-router-dom";

const Path = ({ completedLectures }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="path">
      <h2>Heat Path</h2>
      <p>YOUR PATH</p>
      <div className="lecture-path">
        {[1, 2, 3, 4].map((lecture, index) => (
          <div
            key={index}
            id={`lecture-${lecture}`}
            className={`lecture ${completedLectures + 1 >= lecture ? 'unlocked' : 'locked'}`}
          >
            <button 
              onClick={() => handleNavigation(`/lecture/${lecture}`)} 
              disabled={completedLectures + 1 < lecture}
            >
              {lecture}
            </button>
          </div>
        ))}
        <div className={`final-quiz ${completedLectures === 4 ? 'unlocked' : 'locked'}`}>
          <button 
            onClick={() => handleNavigation("/final-quiz")} 
            disabled={completedLectures !== 4}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Path;