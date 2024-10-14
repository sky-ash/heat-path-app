import React, { useState } from "react";
import { lessons } from "../data/lessons";
import { useParams, useNavigate } from "react-router-dom";
import "@material/web/button/filled-button.js";

const Quiz = ({ markLectureCompleted }) => {
  const { id } = useParams();
  const lesson = lessons.find(l => l.id === parseInt(id));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    if (option === lesson.quiz[questionIndex].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNext = () => {
    if (selectedAnswer === lesson.quiz[questionIndex].answer) {
      if (questionIndex + 1 < lesson.quiz.length) {
        setQuestionIndex(questionIndex + 1);
        setSelectedAnswer(null);
      } else {
        markLectureCompleted(parseInt(id));
        navigate("/path");
      }
    } else {
      navigate(`/lecture/${id}`);
    }
  };

  return (
    <div className="quiz-screen">
      <h2>{lesson.quiz[questionIndex].question}</h2>
      <div className="quiz-options">
        {lesson.quiz[questionIndex].options.map((option, index) => (
          <md-filled-button
            key={index}
            className={selectedAnswer === option ? (option === lesson.quiz[questionIndex].answer ? "correct" : "incorrect") : ""}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </md-filled-button>
        ))}
      </div>
      <md-filled-button raised onClick={handleNext} className="nav-button">Next</md-filled-button>
      <md-filled-button raised onClick={() => navigate("/path")} className="nav-button">
        Back To Path
      </md-filled-button>
    </div>
  );
};

export default Quiz;