import React, { useState, useRef, useEffect } from "react";

const slidesData = [
  { title: "Website Design", icon: "desktop-outline", number: "01", text: "Crafting clean, responsive websites tailored to your brand." },
  { title: "SEO Marketing", icon: "podium-outline", number: "02", text: "Boost your visibility with data-driven SEO strategies." },
  { title: "e Commerce", icon: "basket-outline", number: "03", text: "Launch seamless online stores with secure payment integration." },
  { title: "Graphic Design", icon: "color-filter-outline", number: "04", text: "Create stunning visuals that tell your brand's story." },
  { title: "Digital Marketing", icon: "megaphone-outline", number: "05", text: "Amplify your reach with targeted digital campaigns." },
  { title: "Social Media", icon: "chatbubbles-outline", number: "06", text: "Engage your audience with compelling social media content." },
];

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // number of slides visible
  const sliderRef = useRef(null);

  // Adjust visible slides on resize
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

  const slideNext = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const slidePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % 2);
  };
  // const maxSlide = slidesData.length - visibleSlides;

  // const slideNext = () => {
  //   setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  // };

  // const slidePrev = () => {
  //   setCurrentSlide((prev) => Math.max(prev - 1, 0));
  // };

  const slideWidth = 100 / visibleSlides;
  const translateX = -(currentSlide * slideWidth);

  return (
    <section className="service" aria-labelledby="service-label">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">Services That I Provide</p>
            <h2 className="h2 section-title" id="service-label">Services</h2>
          </div>
          <p className="section-text">I offer a range of services to help businesses and individuals establish a strong digital presence.
            Each service is tailored to deliver results, combining creativity with technical expertise.</p>
        </div>

        <div className="slider">
          <ul
            className="slider-container service-list"
            ref={sliderRef}
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
              width: "100%",
              "--slider-items": visibleSlides,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slidesData.map((slide, index) => (
              <li
                key={index}
                className="slider-item"

              >
                <div className="service-card">
                  <div className="card-icon"><ion-icon name={slide.icon}></ion-icon></div>
                  <h3 className="h3 card-title">{slide.title}</h3>
                  <p className="card-text">{slide.text}</p>
                  <span className="text-lg card-number">{slide.number}</span>
                  <a href="#" className="layer-link" aria-label={`More about ${slide.title} service`}></a>
                </div>
              </li>
            ))}
          </ul>

          <div className="slider-controls">
            <button onClick={slidePrev} className="slider-control prev" aria-label="Slide to previous item">
              <div className="line"></div><div className="arrow"></div>
            </button>
            <button onClick={slideNext} className="slider-control next" aria-label="Slide to next item">
              <div className="line"></div><div className="arrow"></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
