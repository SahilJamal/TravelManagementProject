import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import Loader from "../components/Loader";
import MasonryGallery from "../components/MasonryGallery";
import NewsletterSignup from "../components/NewsletterSignup";
import TravelCard from "../components/TravelCard";
import WhyChooseUs from "../components/WhyChooseUs";
import { useGetProductByCategoryNameQuery } from "../slices/productsApiSlice";

const defaultImages = [
  {
    id: 1,
    src: "/images/girls/girl1.jpg",
    alt: "Image 1",
    span: 1,
  },
  {
    id: 2,
    src: "/images/girls/girl2.jpg",
    alt: "Image 2",
    span: 1,
  },
  {
    id: 3,
    src: "/images/girls/girl3.jpg",
    alt: "Image 3",
    span: 1,
  },
  {
    id: 4,
    src: "/images/girls/girl4.jpg",
    alt: "Image 4",
    span: 1,
  },
];

const travelCard = [
  {
    id: 1,
    title: "All Girls Himachal Backpacking Trip",
    subtitle: "Manali Kasol Jibhi",
    image:
      "https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Delhi to Delhi",
    duration: "6N/7D",
    dates: "Oct - Mar",
    price: 15500,
    originalPrice: 18500,
    rating: 7,
    isBestSeller: true,
  },
  {
    id: 2,
    title: "All Girls Meghalaya Backpacking Trip",
    subtitle: "with Kaziranga",
    image:
      "https://images.unsplash.com/photo-1471282465966-5dd12d0de2e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Guwahati to Guwahati",
    duration: "6N/7D",
    dates: "Oct - Apr",
    price: 24000,
    originalPrice: 27500,
    rating: 7,
    isBestSeller: true,
  },
  {
    id: 3,
    title: "All Girls Backpacking Trip to Meghalaya",
    subtitle: "",
    image:
      "https://media.istockphoto.com/id/480638096/photo/young-hipster-friends-on-road-trip.jpg?s=612x612&w=0&k=20&c=RbIq-wPzRdRAfCs2F15PXgiJApRtRYJyKPThpLC17hs=",
    location: "Guwahati to Guwahati",
    duration: "5N/6D",
    dates: "Oct - Apr",
    price: 20000,
    originalPrice: 23000,
    rating: 7,
    isBestSeller: true,
  },
  {
    id: 4,
    title: "All Girls Kedarkantha Trek",
    subtitle: "",
    image:
      "https://media.istockphoto.com/id/471881654/photo/girls-blowing-confetti-from-their-hands-on-a-beach.jpg?s=612x612&w=0&k=20&c=4oJdn0S2qxf6qL4LlbMLJ9kpbP1ZcecxEHGwaK-Ok8A=",
    location: "Dehradun to Dehradun",
    duration: "4N/5D",
    dates: "Nov - Jan",
    price: 9500,
    originalPrice: 9500,
    rating: 7,
    isBestSeller: true,
  },
  {
    id: 5,
    title: "All Girls on Beach",
    subtitle: "",
    image:
      "https://imgs.search.brave.com/mtKkR34PU-XSzhYKgm_CvyvhwYIPsj-uEiNAy9uWGTc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/NzMxMzI4OC9waG90/by9mcmllbmRzLXN0/YW5kaW5nLW9uLXJv/YWQtbmVhci10aGUt/c2VhLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz03Vk9LODY2d1l0/UkpVTFJNZUhmZDcy/WGI1WGlsZlk2cVFF/NXhwYTdncFUwPQ",
    location: "Dehradun to Dehradun",
    duration: "4N/5D",
    dates: "Nov - Jan",
    price: 9500,
    originalPrice: 9500,
    rating: 7,
    isBestSeller: false,
  },
];
const images = travelCard?.map((item) => item.image);

const AllGirlsTrips = () => {
  const params = useParams();
  const { keyword } = params;
  const { data, isLoading } = useGetProductByCategoryNameQuery({
    category: keyword,
  });
  const newData = data?.Trips?.[0];
  // console.log("newData", newData);

  if (isLoading) return <Loader />;

  return (
    <Container className="mt-4rem">
      <Row className="align-items-start">
        {/* Left Column: Text */}
        <Col md={6} className="trip-description">
          <h2>All Girls Trips</h2>
          <p className="trip-subtitle">
            {newData?.description ||
              "You will never be completely at home again..."}
          </p>
        </Col>

        {/* Right Column: Image Grid */}
        <Col md={6}>
          <MasonryGallery images={defaultImages} />
        </Col>
      </Row>
      <div className="travel-packages">
        {travelCard?.map((pack) => (
          <TravelCard
            key={pack.id}
            title={pack.title}
            subtitle={pack.subtitle}
            image={pack.image}
            location={pack.location}
            duration={pack.duration}
            dates={pack.dates}
            price={pack.price.toLocaleString()}
            originalPrice={pack.originalPrice.toLocaleString()}
            rating={`(${pack.rating}k)`}
            isBestSeller={pack.isBestSeller}
          />
        ))}
      </div>
      <div className="choose-us">
        <Row className="w-100">
          <h4 className="m-3">Why Tour Travel</h4>
          <Col xs={12} md={6}>
            <ImageGallery images={images} />
          </Col>
          <Col xs={12} md={6}>
            <WhyChooseUs />
          </Col>
        </Row>
      </div>
      <div>
        <NewsletterSignup />
      </div>
    </Container>
  );
};

export default AllGirlsTrips;
