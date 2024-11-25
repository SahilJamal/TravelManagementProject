import React, { useRef, useState, useEffect } from "react";
import Scrambler from "scrambling-text";
import { Button, Carousel } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const carouselImages = [
  {
    id: 1,
    image:
      "https://internationalyouthclub.org/wp-content/uploads/2021/07/mountain-3800239_1920-1.jpg",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1680788452823-49bb63651490?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const ParallaxHero = () => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0); // Index to track current text in array
  const [text, setText] = useState("Adventure"); // Displayed text

  // Create an instance of Scrambler using useRef.
  const scramblerRef = useRef(new Scrambler());

  useEffect(() => {
    const textArray = ["Adventure", "Thrill", "Memories", "Experience"]; // Array of texts

    // Function to change text at intervals
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % textArray.length; // Loop through the array
      setCurrentIndex(nextIndex);

      // Scramble the next text in the array
      scramblerRef.current.scramble(textArray[nextIndex], setText);
    }, 3000); // Change text every 3 seconds (adjust as needed)

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      {location.pathname === "/" && (
        <div className="hero-container">
          <Carousel
            controls={false}
            indicators={false}
            interval={3000}
            pause={false}
            className="hero-carousel"
          >
            {carouselImages.map((item) => (
              <Carousel.Item key={item.id}>
                <div
                  className="carousel-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <motion.section
            className="hero-content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h1 className="hero-title">
              <span className="highlight">Get Ready for</span>
              <br />
              {text}
            </h1>
            <Button className="hero-button">VIEW ALL TOURS</Button>
          </motion.section>
        </div>
      )}
    </>
  );
};

export default ParallaxHero;
