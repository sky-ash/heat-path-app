import React, { useState } from "react";
import { lessons } from "../data/lessons";
import { useParams, useNavigate } from "react-router-dom";

const Quiz = ({ markLectureCompleted }) => {
  const { id } = useParams();
  const lesson = lessons.find(l => l.id === parseInt(id));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    const isCorrect = lesson.quiz[questionIndex].answer === option;
    if (isCorrect) {
      setScore(score + 1);
    }

    if (questionIndex + 1 < lesson.quiz.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      if (score + 1 === lesson.quiz.length) {
        markLectureCompleted(parseInt(id));
        navigate("/path");
      } else {
        navigate(`/lecture/${id}`);
      }
    }
  };

  return (
    <div className="quiz">
      <h2>{lesson.quiz[questionIndex].question}</h2>
      {lesson.quiz[questionIndex].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Quiz;
