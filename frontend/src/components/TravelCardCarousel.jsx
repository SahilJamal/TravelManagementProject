import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    image: "https://picsum.photos/200/300",
    route: "Bangalore - Ooty",
    price: "₹ 9,000",
  },
  {
    id: 2,
    image: "https://picsum.photos/200/300",
    route: "Mumbai - Lonavala",
    price: "₹ 6,000",
  },
  {
    id: 3,
    image: "https://picsum.photos/200/300",
    route: "Mussorie",
    price: "₹ 4,200",
  },
  {
    id: 4,
    image: "https://picsum.photos/200/300",
    route: "Nainital",
    price: "₹ 4,500",
  },
  {
    id: 5,
    image: "https://picsum.photos/200/300",
    route: "Massouri",
    price: "₹ 4,500",
  },
  {
    id: 6,
    image: "https://picsum.photos/200/300",
    route: "Goa",
    price: "₹ 4,500",
  },
  {
    id: 7,
    image: "https://picsum.photos/200/300",
    route: "Nagpur",
    price: "₹ 4,500",
  },
  {
    id: 8,
    image: "https://picsum.photos/200/300",
    route: "Mumbai",
    price: "₹ 4,500",
  },
];
const TravelCardCarousel = () => {
  // Create an array that repeats the destinations for infinite effect
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const destinationChunks = chunkArray(destinations, 4);
  console.log("destinationChunks", destinationChunks);
  return (
    <div className="travel-carousel-container">
      <h2 className="mb-4 text-3xl font-bold">Mountains</h2>
      <Carousel pause="hover" className="custom-carousel">
        {destinationChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="cards-wrapper">
              {chunk.map((destination) => (
                <Link
                  key={destination.id}
                  to={`/product/${destination.route}`}
                  className="card-link"
                >
                  <div className="destination-card">
                    <Image
                      src={destination.image}
                      alt={destination.route}
                      fluid
                    />
                    <div className="card-overlay">
                      <h2 className="card-title">{destination.route}</h2>
                      <p className="card-price">
                        Package Starting - {destination.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default TravelCardCarousel;
