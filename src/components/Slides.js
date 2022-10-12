import React, { useState } from "react";

function Slides({ slides }) {
  const [currSlideShowIndex, setCurrSlideShowIndex] = useState(0);
  const [currSlide, setCurrSlide] = useState(slides[0]);
  const updateSlideHandler = (operator) => {
    let currValue = currSlideShowIndex;
    setCurrSlideShowIndex((prev) => (operator === "add" ? prev + 1 : prev - 1));
    setCurrSlide(slides[operator === "add" ? currValue + 1 : currValue - 1]);
  };
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={currSlideShowIndex === 0 ? true : false}
          onClick={() => {
            setCurrSlide(slides[0]);
            setCurrSlideShowIndex(0);
          }}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={currSlideShowIndex === 0 ? true : false}
          onClick={() => {
            if (currSlideShowIndex === 0) return;
            updateSlideHandler("sub");
          }}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={currSlideShowIndex === slides.length ? true : false}
          onClick={() => {
            if (currSlideShowIndex === slides.length) return;

            updateSlideHandler("add");
          }}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{currSlide?.title}</h1>
        <p data-testid="text">{currSlide?.text}</p>
      </div>
    </div>
  );
}

export default Slides;
