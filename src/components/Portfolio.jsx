import React, { useState, useEffect } from "react";

import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";
import portfolio5 from "../assets/portfolio-5.jpg";
import portfolio6 from "../assets/portfolio-6.jpg";

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isPaused, setIsPaused] = useState(false); // ✅ NEW

  const portfolioImages = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
  ];

  /* -------------------------------
     Handle responsive slide count
  -------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -------------------------------
     Slider logic
  -------------------------------- */
  const maxSlide = 1;

  const slideNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const slidePrev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  /* -------------------------------
     AUTOPLAY
  -------------------------------- */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      slideNext();
    }, 6000); // 10 seconds

    return () => clearInterval(interval);
  }, [isPaused, visibleSlides]);

  return (
    <section className="portfolio" aria-labelledby="portfolio-label">
      {/* ---------- TITLE ---------- */}
      <div className="title-wrapper container">
        <div>
          <p className="section-subtitle" id="portfolio-label">
            Our Works
          </p>
          <h2 className="h2 section-title">Portfolio</h2>
        </div>
        <p className="section-text">
          Take a look at some of the projects where I’ve transformed ideas into digital experiences.
          From web applications to creative software solutions,
          each project reflects innovation, functionality, and a commitment to shaping the digital future.
        </p>
      </div>

      {/* ---------- SLIDER ---------- */}
      <div
        className="slider"
        onMouseEnter={() => setIsPaused(true)}   // ✅ pause
        onMouseLeave={() => setIsPaused(false)} // ✅ resume
      >
        <ul
          className="slider-container"
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            width: "100%",
            "--slider-items": visibleSlides,
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {portfolioImages.map((image, index) => (
            <li className="slider-item" key={index}>
              <div
                className="portfolio-card img-holder"
                style={{ "--width": 600, "--height": 600 }}
              >
                <img
                  src={image}
                  width="600"
                  height="600"
                  loading="lazy"
                  alt={`Portfolio ${index + 1}`}
                  className="img-cover"
                />

                <div className="card-content">
                  <h3 className="h3 card-title">
                    PORTFOLIO {index + 1}
                  </h3>
                  <p className="card-text">Website Design</p>
                </div>

                <a href="#" className="layer-link"></a>
              </div>
            </li>
          ))}
        </ul>

        {/* ---------- CONTROLS ---------- */}
        <div className="slider-controls">
          <button
            className="slider-control prev"
            aria-label="Slide to previous item"
            onClick={slidePrev}
          >
            <div className="line"></div>
            <div className="arrow"></div>
          </button>

          <button
            className="slider-control next"
            aria-label="Slide to next item"
            onClick={slideNext}
          >
            <div className="line"></div>
            <div className="arrow"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
