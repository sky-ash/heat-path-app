import React, { useState } from "react";
import { lessons } from "../data/lessons";
import { useParams, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const Lecture = ({ markCompleted }) => {
  const { id } = useParams();
  const lesson = lessons.find(l => l.id === parseInt(id));
  const [cardIndex, setCardIndex] = useState(0);
  const [viewedCards, setViewedCards] = useState(Array(lesson.cards.length).fill(false));
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    const newIndex = (cardIndex + 1) % lesson.cards.length;
    setCardIndex(newIndex);
    markCardAsViewed(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (cardIndex - 1 + lesson.cards.length) % lesson.cards.length;
    setCardIndex(newIndex);
    markCardAsViewed(newIndex);
  };

  const markCardAsViewed = (index) => {
    const updatedViewedCards = [...viewedCards];
    updatedViewedCards[index] = true;
    setViewedCards(updatedViewedCards);
  };

  const handleMarkCompleted = () => {
    if (viewedCards.every(viewed => viewed)) {
      markCompleted(parseInt(id));
      setIsCompleted(true);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div>

    <header className="header">
      <div className="logo">Heat Path</div>
      <button onClick={() => navigate("/path")} className="home-button"/>
    </header>

    <div className="lecture-screen" {...handlers}>
      <h2>{lesson.title}</h2>

      <div className="card">
        <p>{lesson.cards[cardIndex]}</p>
      </div>
      <div className="cards-container">
        <button onClick={handlePrev} id="prev"/>
        <button onClick={handleNext} id="next"/>
      </div>

      <div className="nav-buttons">
        <button 
          onClick={handleMarkCompleted} 
          className={`nav-button ${viewedCards.every(viewed => viewed) && !isCompleted ? '' : 'locked'}`}
        >
          {isCompleted ? "Already Completed" : "Mark Completed"}
        </button>
        <button 
          onClick={() => navigate(`/quiz/${id}`)} 
          className={`nav-button ${isCompleted ? '' : 'locked'}`}
          title={isCompleted ? '' : 'Please complete the lecture before going to the quiz'}
        >
          Go To Quiz
        </button>
      </div>
    </div>

    </div>
  );
};

export default Lecture;