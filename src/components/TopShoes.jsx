import React, { useState } from "react";
// import "./TopShoes.css"; // make sure to import CSS or use global styles

const TopShoes = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const totalSlides = 4;

  const handleRotate = (direction) => {
    const angle = direction === "next" ? rotationAngle + 90 : rotationAngle - 90;
    setRotationAngle(angle);

    const slideShift = direction === "next" ? translateValue - 100 : translateValue + 100;
    let newTranslate = slideShift;

    if (slideShift === -100 * totalSlides) {
      newTranslate = 0;
    } else if (slideShift === 100) {
      newTranslate = -100 * (totalSlides - 1);
    }

    setTranslateValue(newTranslate);
  };

  return (
    <section className="top-shoes">
      <h1 className="flex hero-heading text-center mb-5">
        <div data-aos="fade-up">T</div>
        <div data-aos="fade-down">O</div>
        <div data-aos="fade-up" className="m-4">P</div>
        <div data-aos="fade-down">S</div>
        <div data-aos="fade-up">H</div>
        <div data-aos="fade-down">O</div>
        <div data-aos="fade-up">E</div>
        <div data-aos="fade-down">S</div>
      </h1>

      <div className="home-section mb-5">
        {/* Circle Layout */}
        <div className="circle-container">
          <div
            className="circle-menu"
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          >
            <div className="menu-item" id="item1">
              <img src="/Images/shoes1.png" alt="shoe1" />
            </div>
            <div className="menu-item" id="item2">
              <img src="/Images/shoes2.png" alt="shoe2" />
            </div>
            <div className="menu-item" id="item3">
              <img src="/Images/shoes6.png" alt="shoe3" />
            </div>
            <div className="menu-item" id="item4">
              <img src="/Images/shoes5.png" alt="shoe4" />
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="slider-container mt-5">
          <div className="container">
            <div className="slider">
              <div
                id="slides"
                style={{ transform: `translateX(${translateValue}%)` }}
              >
                <img src="/Images/shoes2.png" className="img" />
                <img src="/Images/shoes1.png" className="img" />
                <img src="/Images/shoes5.png" className="img" />
                <img src="/Images/shoes6.png" className="img" />
              </div>
            </div>

            <div className="buttons">
              <button onClick={() => handleRotate("prev")} className="main-btn">Previous</button>
              <button onClick={() => handleRotate("next")} className="main-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopShoes;
