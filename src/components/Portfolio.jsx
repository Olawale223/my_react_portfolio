import React, { useState, useEffect } from "react";
import portfolioData from "./pfolioitem";

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

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
  const maxSlide = Math.ceil(portfolioData.length / visibleSlides) - 1; // ✅ FIXED

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
    }, 4000);

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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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
          {portfolioData.map((item, index) => (
            <li className="slider-item" key={index}>
              <div
                className="portfolio-card img-holder"
                style={{ "--width": 600, "--height": 600 }}
              >
                <img
                  src={item.image}
                  width="600"
                  height="600"
                  loading="lazy"
                  alt={item.title}
                  className="img-cover"
                />

                <div className="card-content">
                  <h3 className="h3 card-title">{item.title}</h3>
                  <p className="card-text">{item.category}</p>
                </div>

                {/* ✅ CLICKABLE LINK */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="layer-link"
                ></a>
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