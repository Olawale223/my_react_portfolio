import React from "react";
import portfolioData from "./pfolioitem";
import useSlider from "./Slider";

function Portfolio() {
  const { canSlide, next, prev, sliderProps, trackProps } = useSlider(
    portfolioData.length
  );

  return (
    <section className="portfolio" aria-labelledby="portfolio-label">
      <div className="title-wrapper container">
        <div>
          <p className="section-subtitle" id="portfolio-label">
            Our Works
          </p>
          <h2 className="h2 section-title">Portfolio</h2>
        </div>

        <p className="section-text">
          Take a look at some of the projects where I’ve transformed ideas into
          digital experiences. From web applications to creative software
          solutions, each project reflects innovation, functionality, and a
          commitment to shaping the digital future.
        </p>
      </div>

      <div {...sliderProps}>
        <ul {...trackProps}>
          {portfolioData.map((item, index) => (
            <li className="slider-item" key={`${item.title}-${index}`}>
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

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="layer-link"
                  aria-label={`View ${item.title}`}
                />
              </div>
            </li>
          ))}
        </ul>

        {canSlide && (
          <div className="slider-controls">
            <button
              type="button"
              className="slider-control prev"
              aria-label="Previous portfolio item"
              onClick={prev}
            >
              <div className="line"></div>
              <div className="arrow"></div>
            </button>
            <button
              type="button"
              className="slider-control next"
              aria-label="Next portfolio item"
              onClick={next}
            >
              <div className="line"></div>
              <div className="arrow"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;