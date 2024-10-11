import React, { useState } from "react";
import { lessons } from "../data/lessons";
import { useParams, useNavigate } from "react-router-dom";

const Lecture = ({ markCompleted }) => {
  const { id } = useParams();
  const lesson = lessons.find(l => l.id === parseInt(id));
  const [cardIndex, setCardIndex] = useState(0);
  const [viewedCards, setViewedCards] = useState(new Set());
  const navigate = useNavigate();

  const handleNext = () => {
    const newIndex = cardIndex + 1;
    if (newIndex < lesson.cards.length) {
      setCardIndex(newIndex);
      setViewedCards(new Set([...viewedCards, cardIndex]));
    }
  };

  const handleMarkCompleted = () => {
    if (viewedCards.size === lesson.cards.length - 1) {
      markCompleted(parseInt(id));
      navigate(`/quiz/${id}`);
    }
  };

  return (
    <div className="lecture">
      <h2>{lesson.title}</h2>
      <div className="card">
        <p>{lesson.cards[cardIndex]}</p>
        <button onClick={handleNext}>Next</button>
      </div>
      {viewedCards.size === lesson.cards.length - 1 && (
        <button onClick={handleMarkCompleted}>Mark Completed</button>
      )}
    </div>
  );
};

export default Lecture;
