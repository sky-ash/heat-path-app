import React, { useState } from "react";
import { lessons } from "../data/lessons";
import { useParams, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import "@material/web/button/filled-button.js";

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
    <div className="lecture-screen" {...handlers}>
      <h2>{lesson.title}</h2>

      <div className="cards-container">
        <md-filled-button onClick={handlePrev} id="prev"/>
        <div className="card">
          <p>{lesson.cards[cardIndex]}</p>
        </div>
        <md-filled-button onClick={handleNext} id="next"/>
      </div>
      <md-filled-button 
        raised
        onClick={handleMarkCompleted} 
        className={`nav-button ${viewedCards.every(viewed => viewed) && !isCompleted ? '' : 'locked'}`}
      >
        {isCompleted ? "Already Completed" : "Mark Completed"}
      </md-filled-button>
      <md-filled-button 
        raised
        onClick={() => navigate(`/quiz/${id}`)} 
        className={`nav-button ${isCompleted ? '' : 'locked'}`}
        title={isCompleted ? '' : 'Please complete the lecture before going to the quiz'}
      >
        Go To Quiz
      </md-filled-button>
      <md-filled-button raised onClick={() => navigate("/path")} className="nav-button">
        Back To Path
      </md-filled-button>
    </div>
  );
};

export default Lecture;