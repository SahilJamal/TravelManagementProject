import React from "react";
import { Container } from "react-bootstrap";
import DestinationCard from "../components/DestinationCard";
import ServicesTabs from "../components/ServicesTabs";
import { TravelCardMap } from "../components/Card";
import { TestimonialSection } from "../components/Testimonials";
import VideosCarousel from "../components/VideosCarousel";
import InstagramBanner from "../components/InstagramBanner";
import InstagramPosts from "../components/InstagramPosts";
import BlogListing from "../components/BlogListing";
import RecognitionsSection from "../components/RecognitionsSection";
import NewsletterSignup from "../components/NewsletterSignup";
import CustomBanner from "../components/CustomBanner";

export const destinations = [
  {
    name: "Andaman and Nicobar Islands",
    image:
      "https://images.unsplash.com/photo-1545762374-d18079617da8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1710350697459-5770919a823e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kerala",
    image:
      "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export const travelExperiences = [
  {
    id: 1,
    title: "All Girls Himachal Backpacking Trip",
    location: "Delhi to Delhi",
    duration: "6N/7D",
    season: "Oct - Mar",
    price: 18500,
    reviewCount: "7k",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683408267588-ebc95a4cf9a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "All Girls Meghalaya Backpacking Trip",
    location: "Guwahati to Guwahati",
    duration: "6N/7D",
    season: "Oct - Apr",
    price: 27500,
    reviewCount: "7k",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683408267588-ebc95a4cf9a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "All Girls Kedarkantha Trek",
    location: "Dehradun to Dehradun",
    duration: "4N/5D",
    season: "Nov - Jan",
    price: 9500,
    reviewCount: "7k",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683408267588-ebc95a4cf9a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "All Girls Kashmir Backpacking Trip",
    location: "Srinagar to Srinagar",
    duration: "5N/6D",
    season: "Apr - Sep",
    price: 21500,
    reviewCount: "5k",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683408267588-ebc95a4cf9a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function HomeScreen() {
  return (
    <Container>
      <DestinationCard title={"Destination"} />
      <TravelCardMap title={"Category"} />
      <DestinationCard title={"Themes"} />
      <ServicesTabs />
      <CustomBanner
        title={"Banner"}
        imageUrl={
          "https://t4.ftcdn.net/jpg/09/62/36/69/360_F_962366927_vz3NOfCzrZLVlgIIPxAnGYOjfccIeN6V.jpg"
        }
        buttonText={"Explore Now"}
      />
      <TestimonialSection />
      <VideosCarousel />
      <InstagramBanner />
      <InstagramPosts />
      <BlogListing />
      <NewsletterSignup />
      <RecognitionsSection />
    </Container>
  );
}
