import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Path from "./components/Path";
import Lecture from "./components/Lecture";
import Quiz from "./components/Quiz";
import StartPage from "./components/StartPage";
import "./styles/App.css";

const App = () => {
  const [completedLectures, setCompletedLectures] = useState(0);

  const markLectureCompleted = (lectureId) => {
    if (lectureId === completedLectures + 1) {
      setCompletedLectures(lectureId);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/path" element={<Path completedLectures={completedLectures} />} />
          <Route
            path="/lecture/:id"
            element={<Lecture markCompleted={markLectureCompleted} />}
          />
          <Route
            path="/quiz/:id"
            element={<Quiz markLectureCompleted={markLectureCompleted} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
