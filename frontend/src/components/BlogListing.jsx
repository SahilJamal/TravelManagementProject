import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BlogListing = () => {
  // Sample blog data - replace with your actual data
  const blogs = [
    {
      id: 1,
      image:
        "https://cdn.audleytravel.com/700/501/79/1328411-hawa-mahal-jaipur.jpg",
      publishDate: "7 Oct",
      readTime: "4 minutes read",
      title:
        "Rajasthan Launches India's First Luxury E-Cruise on Ana Sagar Lake",
      isFeatured: false,
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/530450181/photo/nepal.jpg?s=612x612&w=0&k=20&c=JWuNfPs8iWGm4ewOUkq2pgVG_Ad2a4lvyTT8-YciIIY=",
      publishDate: "7 Oct",
      readTime: "11 minutes read",
      title: "Top Things To Do In Nepal: Activities, Adventures & Experiences",
      isFeatured: false,
    },
    {
      id: 3,
      image:
        "https://t4.ftcdn.net/jpg/03/77/75/37/360_F_377753707_YYjCVtBT6WWOk1ltyun6m9gzUE65pAEE.jpg",
      publishDate: "4 Oct",
      readTime: "10 minutes read",
      title: "Tiger's Nest Monastery: An Iconic Bhutan Monastery",
      isFeatured: false,
    },
    {
      id: 4,
      image:
        "https://media.gettyimages.com/id/1095345646/photo/hill-station-village.jpg?s=612x612&w=0&k=20&c=RYxx_nzotozamK364i09g8zg9O5eo27d8C7oZoJnhRE=",
      publishDate: "4 Oct",
      readTime: "13 minutes read",
      title:
        "Magical Hill Stations For Christmas & New Year Celebration in India",
      description:
        "India offers a diverse range of hill stations for Christmas and New year celebration amidst serene hills and snow clad mountains. New year celebration in hill station is a perfect retreat...",
      isFeatured: true,
    },
  ];

  return (
    <Container className="blog-section mt-4rem">
      <div className="text-center mb-5">
        <p className="section-subtitle">BLOGS</p>
        <h2 className="section-title">Our Blogs</h2>
      </div>

      <Row>
        <Col md={6}>
          <Row className="g-4">
            {blogs
              .filter((blog) => !blog.isFeatured)
              .map((blog) => (
                <Col key={blog.id} xs={12}>
                  <div className="blog-card">
                    <Row>
                      <Col xs={4}>
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="blog-thumbnail"
                        />
                      </Col>
                      <Col xs={8}>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <span>Published on {blog.publishDate}</span>
                            <span>{blog.readTime}</span>
                          </div>
                          <h3 className="blog-title">{blog.title}</h3>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
          </Row>
        </Col>

        <Col md={6}>
          {blogs
            .filter((blog) => blog.isFeatured)
            .map((blog) => (
              <div key={blog.id} className="featured-blog-card">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="featured-blog-image"
                />
                <div className="featured-blog-content">
                  <div className="blog-meta">
                    <span>Published on {blog.publishDate}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="featured-blog-title">{blog.title}</h3>
                  <p className="featured-blog-description">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
        </Col>
      </Row>

      <div className="text-center mt-4">
        <button className="view-all-btn">View All →</button>
      </div>

      <style jsx>{``}</style>
    </Container>
  );
};

export default BlogListing;
