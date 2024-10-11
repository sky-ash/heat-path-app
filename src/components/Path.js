import React from "react";
import { Link } from "react-router-dom";

const Path = ({ completedLectures }) => {
  return (
    <div className="path">
      <h2>Heat Path</h2>
      <p>YOUR PATH</p>
      <div className="lecture-path">
        {[1, 2, 3, 4].map((lecture, index) => (
          <div
            key={index}
            className={`lecture ${completedLectures >= lecture ? 'unlocked' : 'locked'}`}
          >
            <Link to={completedLectures >= lecture ? `/lecture/${lecture}` : "#"}>
              {lecture}
            </Link>
          </div>
        ))}
        <div className={`final-quiz ${completedLectures === 4 ? 'unlocked' : 'locked'}`}>
          <Link to={completedLectures === 4 ? "/final-quiz" : "#"}>X</Link>
        </div>
      </div>
    </div>
  );
};

export default Path;
