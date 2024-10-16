import React, { useState } from "react";
import { lessons } from "../data/lessons";
import { useParams, useNavigate } from "react-router-dom";

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
    <div>

    <header className="header">
      <div className="logo">Heat Path</div>
      <button onClick={() => navigate("/path")} className="home-button"/>
    </header>


    <div className="quiz-screen">
      <h2>{lesson.title}</h2>

      <div className="card">

      <h3>{lesson.quiz[questionIndex].question}</h3>
      </div>
      <div className="quiz-options">
        {lesson.quiz[questionIndex].options.map((option, index) => (
          <button
            key={index}
            className={selectedAnswer === option ? (option === lesson.quiz[questionIndex].answer ? "correct" : "incorrect") : ""}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}

      </div>




      <div className="nav-buttons">
        <button 
          onClick={handleNext} 
          className="nav-button">Next</button>
      <button onClick={() => navigate("/path")} className="nav-button">
        Back To Path
      </button>
      </div>


    </div>


    </div>
  );
};

export default Quiz;
