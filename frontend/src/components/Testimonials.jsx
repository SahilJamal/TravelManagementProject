import React, { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const TestimonialSlider = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-section mt-4rem">
      <div className="text-center mb-5">
        <p className="text-uppercase mb-2">REVIEWS</p>
        <h2 className="section-title">What Our Clients Say About Us</h2>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {[0, 1, 2].map((offset) => {
            const index = (currentSlide + offset) % testimonials.length;
            const testimonial = testimonials[index];

            return (
              <div
                key={testimonial.id}
                className="col-12 col-md-6 col-lg-4 mb-4"
              >
                <div className="testimonial-card">
                  <div className="quote-marks">
                    <RiDoubleQuotesL />
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>

                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      {testimonial.avatarUrl ? (
                        <img
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                        />
                      ) : (
                        <div className="avatar-placeholder">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="reviewer-details">
                      <div className="rating">{"★".repeat(5)}</div>
                      <div className="reviewer-name">{testimonial.name}</div>
                    </div>
                  </div>

                  {testimonial.trek && (
                    <div className="trek-info">
                      <img
                        src={testimonial.trek.imageUrl}
                        alt={testimonial.trek.name}
                        className="trek-image"
                      />
                      <div className="trek-details">
                        <h4>{testimonial.trek.name}</h4>
                        <a
                          href={testimonial.trek.link}
                          className="try-yourself-btn"
                        >
                          Try Yourself →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="slider-controls">
          <button onClick={prevSlide} className="control-btn">
            ←
          </button>
          <button onClick={nextSlide} className="control-btn">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export const TestimonialSection = () => {
  const testimonialData = [
    {
      id: 1,
      text: "December 2023 New Year - I've recently done Jaisalmer weekend trip, accomodation in Jaisalmer was absolutely superb and enjoyed the trip, special thanks to ghazifa,apoorv, easy and Sohail for making the trip amazing and memorable.",
      name: "G Chanakya",
      rating: 5,
      trek: null,
    },
    {
      id: 2,
      text: "The Kashmir Great Lake Trek with Just Wravel was an absolute dream come true. Words can't fully capture the emotions I felt while exploring the mesmerizing landscapes and immersing myself in the local culture.",
      name: "Anurag Bhardwaj",
      rating: 5,
      trek: {
        name: "Kashmir Great Lakes Trek",
        imageUrl: "/api/placeholder/100/100",
        link: "#",
      },
    },
    {
      id: 3,
      text: "Amazing trekking company. Can trust them with their services. Very prompt and professional.",
      name: "Shyamlee Khanna",
      rating: 5,
      trek: {
        name: "Kuari Pass Trek",
        imageUrl: "/api/placeholder/100/100",
        link: "#",
      },
    },
  ];

  return (
    <>
      <TestimonialSlider testimonials={testimonialData} />
    </>
  );
};
