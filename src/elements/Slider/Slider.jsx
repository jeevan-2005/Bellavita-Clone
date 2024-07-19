import { useEffect, useState } from "react";
import './slider.css'

function Slider() {
  const offers = [
    { id: 1, text: "🎁 FREE Gift on all PREPAID Orders" },
    { id: 2, text: "😎 Get any 3 100ml PERFUMES for just ₹1298" },
    { id: 3, text: "🤩 Get any 2 100ml PERFUMES for just ₹949" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalId;
    const autoSlideShow = () => {
      intervalId = setInterval(() => {
        setIndex(index => ((index + 1) % 3));
      }, 2000);
    };
    autoSlideShow();
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="slider"
    >
      <div className="buttons">
        <a
          className="prev"
          onClick={() => setIndex(index == 0 ? 2 : index - 1)}
        >
          &#10094;
        </a>
        <a className="next" onClick={() => setIndex((index + 1) % 3)}>
          &#10095;
        </a>
      </div>
      <p className="offer">{offers[index].text}</p>
    </div>
  );
}

export default Slider;
