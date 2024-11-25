import React from "react";
import Slider from "react-slick";

const videos = [
  {
    id: 1,
    title: "Wedding Dance",
    thumbnailUrl:
      "https://imgv3.fotor.com/images/gallery/Youtube-Thumbnail-Template-for-Travel.jpg",
  },
  {
    id: 2,
    title: "First Kiss",
    thumbnailUrl:
      "https://imgv3.fotor.com/images/gallery/Youtube-Thumbnail-Template-for-Travel.jpg",
  },
  {
    id: 3,
    title: "Ceremony",
    thumbnailUrl:
      "https://imgv3.fotor.com/images/gallery/Youtube-Thumbnail-Template-for-Travel.jpg",
  },
  {
    id: 4,
    title: "Reception",
    thumbnailUrl:
      "https://imgv3.fotor.com/images/gallery/Youtube-Thumbnail-Template-for-Travel.jpg",
  },
  {
    id: 5,
    title: "Family Photos",
    thumbnailUrl:
      "https://imgv3.fotor.com/images/gallery/Youtube-Thumbnail-Template-for-Travel.jpg",
  },
];
const VideosCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="video-memories-section mt-4rem">
      <div className="section-header">
        <p className="section-subtitle">VIDEOS</p>
        <h4 className="section-title">Memories For Life</h4>
      </div>

      <div className="carousel-container">
        <Slider {...settings}>
          {videos.map((video) => (
            <div className="video-thumbnail" key={video.id}>
              <img src={video.thumbnailUrl} alt={video.title} />
              <div className="play-button">
                <div className="play-icon">
                  <span>▶</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideosCarousel;
